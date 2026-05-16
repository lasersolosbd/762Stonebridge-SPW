"use client";

import { useState, useEffect } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

const retellWebClient = new RetellWebClient();

export default function AIIntakeWidget() {
  const [mode, setMode] = useState("voice");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [textSubmitted, setTextSubmitted] = useState(false);
  const [statusText, setStatusText] = useState("Online");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    retellWebClient.on("call_started", () => {
      setIsCalling(true);
      setStatusText("Call Connected");
      setIsError(false);
    });

    retellWebClient.on("call_ended", () => {
      setIsCalling(false);
      setStatusText("Online");
      setIsError(false);
    });

    retellWebClient.on("error", (error) => {
      console.error("Retell error:", error);
      setIsCalling(false);
      setStatusText("Connection Error");
      setIsError(true);
    });

    return () => {
      retellWebClient.off("call_started");
      retellWebClient.off("call_ended");
      retellWebClient.off("error");
    };
  }, []);

  const handleAction = async () => {
    if (!name || !phone) {
      alert("Please enter your name and phone number first.");
      return;
    }

    setIsError(false);

    if (mode === "voice") {
      setStatusText("Connecting...");
      try {
        const response = await fetch("/api/retell", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, mode: "voice" }),
        });

        const data = await response.json();

        if (!response.ok || !data.accessToken) {
          throw new Error("Failed to get access token");
        }

        await retellWebClient.startCall({
          accessToken: data.accessToken,
        });

      } catch (error) {
        console.error("Failed to connect:", error);
        setStatusText("Connection Failed");
        setIsError(true);
        setIsCalling(false);
      }
    } else {
      // TEXT MODE TRIGGER
      setStatusText("Sending Text...");
      try {
        const response = await fetch("/api/retell", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, mode: "text" }),
        });

        if (!response.ok) {
          throw new Error("Failed to send lead details to server");
        }

        setTextSubmitted(true);
        setStatusText("Text Sent");
      } catch (error) {
        console.error("Failed to send text payload:", error);
        setStatusText("Submission Failed");
        setIsError(true);
      }
    }
  };

  const handleEndCall = () => {
    retellWebClient.stopCall();
  };

  const handleResetTextWidget = () => {
    setTextSubmitted(false);
    setName("");
    setPhone("");
    setStatusText("Online");
  };

  const showFormFields = !isCalling && !textSubmitted;

  return (
    <div className="bg-[#1a2744] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
      {/* Widget Header */}
      <div className="bg-[#111b35] px-6 py-5 flex items-center justify-between border-b border-white/[0.08]">
        <div className="flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full p-1">
          <button
            onClick={() => { if (!isCalling && !textSubmitted) setMode("voice"); }}
            disabled={isCalling || textSubmitted}
            className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 tracking-wide disabled:opacity-50 ${
              mode === "voice"
                ? "bg-[#c9973a] text-white"
                : "text-[#8a9bbf] hover:text-white"
            }`}
          >
            🎙 Talk to AI Agent
          </button>
          <button
            onClick={() => { if (!isCalling && !textSubmitted) setMode("text"); }}
            disabled={isCalling || textSubmitted}
            className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 tracking-wide disabled:opacity-50 ${
              mode === "text"
                ? "bg-[#c9973a] text-white"
                : "text-[#8a9bbf] hover:text-white"
            }`}
          >
            💬 Text AI Agent
          </button>
        </div>
        <div className={`flex items-center gap-2 text-xs font-medium ${isError ? "text-red-400" : "text-emerald-400"}`}>
          <span className={`w-2 h-2 rounded-full ${isError ? "bg-red-400" : "bg-emerald-400"} ${isCalling ? "animate-pulse" : "animate-pulse-dot"}`} />
          {statusText}
        </div>
      </div>

      {/* Widget Body */}
      <div className="p-8">
        <div className="flex items-start gap-4 mb-7">
          <div className="w-10 h-10 rounded-full bg-[#c9973a]/15 border border-[#c9973a]/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#c9973a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
          <div className="bg-white/[0.07] rounded-[0_12px_12px_12px] px-4 py-3 text-sm text-[#e8e0d0] leading-relaxed max-w-[280px]">
            {isCalling && "Great! The agent is on the line. You can start speaking now."}
            {textSubmitted && `Awesome, ${name}! I just sent a text message to your phone at ${phone}. Reply directly to that text to chat with me instantly!`}
            {showFormFields && "Hi! I'm the AI agent for 762 Stonebridge Drive. I can answer your questions, help you schedule a tour, or connect you with Mark directly. Before we start — what's your name and best phone number?"}
          </div>
        </div>

        {showFormFields && (
          <>
            <div className="mb-4">
              <label className="block text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-2">
                Your name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First and last name"
                className="w-full bg-white/[0.07] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#8a9bbf]/50 outline-none focus:border-[#c9973a] transition-colors duration-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (000) 000-0000"
                className="w-full bg-white/[0.07] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#8a9bbf]/50 outline-none focus:border-[#c9973a] transition-colors duration-200"
              />
            </div>
          </>
        )}

        {isCalling ? (
          <button 
            onClick={handleEndCall}
            className="w-full mt-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
          >
            End Call
          </button>
        ) : textSubmitted ? (
          <button 
            onClick={handleResetTextWidget}
            className="w-full mt-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
          >
            Start Over / New Inquiry
          </button>
        ) : (
          <button 
            onClick={handleAction}
            className="w-full mt-2 bg-[#c9973a] hover:bg-[#ddb564] text-white font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
          >
            {mode === "voice" ? "Start Talking to the Agent →" : "Send Me a Text Message →"}
          </button>
        )}

        <p className="text-center text-[10px] text-[#8a9bbf]/50 mt-3 leading-relaxed">
          By entering your phone number, you consent to receive calls and texts about this
          property from Solomon Home Services. Reply STOP to opt out. Message &amp; data rates
          may apply.
        </p>
      </div>
    </div>
  );
}
