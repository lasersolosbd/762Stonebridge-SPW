import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, mode } = body;

    // 1. Send cleanly separated data keys directly to GoHighLevel Webhook
    if (process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL) {
      await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phone, mode }),
      }).catch(err => console.error("GHL Webhook Error:", err)); 
    }

    // 2. Select the correct Agent ID based on user toggle selection
    const voiceAgentId = "agent_3132771d0f60fcd4dd28b7da7f";
    const textAgentId = "agent_a52367df32554a850bd34e8a44";
    const selectedAgentId = mode === "text" ? textAgentId : voiceAgentId;

    // 3. Request the secure authorization token from Retell
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: selectedAgentId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get Retell session authorization token");
    }

    const data = await response.json();
    
    return NextResponse.json({ accessToken: data.access_token });
  } catch (error) {
    console.error("API Route Processing Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
