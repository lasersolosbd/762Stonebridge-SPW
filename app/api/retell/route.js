import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    // 1. Send data to GoHighLevel Webhook (Server-side bypasses browser blocks)
    if (process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL) {
      await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      }).catch(err => console.error("GHL Webhook Error:", err)); 
    }

    // 2. Get Retell Token
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: process.env.NEXT_PUBLIC_RETELL_AGENT_ID,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get Retell access token");
    }

    const data = await response.json();
    
    return NextResponse.json({ accessToken: data.access_token });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
