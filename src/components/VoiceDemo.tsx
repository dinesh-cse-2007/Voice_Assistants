import { useEffect, useState } from "react";
import { Mic, Square, Sparkles } from "lucide-react";
import VoiceOrb from "./VoiceOrb";

type SpeechRecognitionType = any;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionType;
    webkitSpeechRecognition?: SpeechRecognitionType;
  }
}

interface DemoCommand {
  keywords: string[];
  response: string;
  speak: string;
}

const COMMANDS: DemoCommand[] = [
  { keywords: ["hello", "hi", "hey"], response: "Hey there! I'm Voxa, your voice assistant. Ask me about the weather, time, a joke, or how I can help you.", speak: "Hey there! I'm Voxa, your voice assistant. Ask me about the weather, time, or a joke." },
  { keywords: ["weather"], response: "It's partly cloudy and 72°F where you are right now. Perfect day for a walk!", speak: "It's partly cloudy and 72 degrees where you are right now. Perfect day for a walk!" },
  { keywords: ["time"], response: `It's ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}. You've got plenty of day left.`, speak: `It's ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.` },
  { keywords: ["joke", "funny"], response: "Why did the AI go to therapy? It had too many deep issues! 😄", speak: "Why did the AI go to therapy? It had too many deep issues!" },
  { keywords: ["help", "what can you do"], response: "I can answer questions, tell jokes, check the weather, set reminders, control smart devices, translate languages, and much more. Just speak naturally!", speak: "I can answer questions, tell jokes, check the weather, set reminders, and control smart devices. Just speak naturally!" },
  { keywords: ["thank", "thanks"], response: "You're very welcome! I'm always here when you need me.", speak: "You're very welcome! I'm always here when you need me." },
  { keywords: ["name", "who are you"], response: "I'm Voxa — a next-generation voice assistant built for natural, helpful conversation.", speak: "I'm Voxa, a next-generation voice assistant built for natural, helpful conversation." },
];

function findResponse(text: string): DemoCommand | null {
  const lower = text.toLowerCase();
  for (const cmd of COMMANDS) {
    if (cmd.keywords.some((k) => lower.includes(k))) return cmd;
  }
  return null;
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.05;
  utter.pitch = 1.0;
  utter.volume = 0.8;
  window.speechSynthesis.speak(utter);
}

const SUGGESTIONS = ["Hey Voxa", "What's the weather?", "Tell me a joke", "What can you do?"];

export default function VoiceDemo() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [recognition, setRecognition] = useState<any>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setSupported(false);
      return;
    }
    const rec = new SR();
    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = "en-US";

    rec.onresult = (e: any) => {
      let txt = "";
      for (let i = 0; i < e.results.length; i++) {
        txt += e.results[i][0].transcript;
      }
      setTranscript(txt);
    };

    rec.onerror = (e: any) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        setError("Microphone access is needed for voice input. You can also try the suggestions below.");
      } else if (e.error !== "no-speech") {
        setError("Something went wrong with voice recognition. Please try again.");
      }
      setListening(false);
    };

    rec.onend = () => {
      setListening(false);
      setTranscript((finalText) => {
        if (finalText.trim()) {
          const match = findResponse(finalText);
          if (match) {
            setReply(match.response);
            speak(match.speak);
          } else {
            const fallback = "I heard you say: \"" + finalText + "\". I'm a demo assistant, so try asking about the weather, time, or a joke!";
            setReply(fallback);
            speak(fallback);
          }
        }
        return finalText;
      });
    };

    setRecognition(rec);
  }, []);

  const toggle = () => {
    if (!supported || !recognition) return;
    setError("");
    setReply("");
    setTranscript("");
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      try {
        recognition.start();
        setListening(true);
      } catch {
        recognition.stop();
        recognition.start();
        setListening(true);
      }
    }
  };

  const trySuggestion = (text: string) => {
    setTranscript(text);
    const match = findResponse(text);
    const response = match ? match.response : "I'm a demo assistant — try asking about the weather, time, or a joke!";
    setReply(response);
    speak(match ? match.speak : response);
  };

  return (
    <div className="demo-card">
      <div className="demo-orb-row">
        <VoiceOrb active={listening} />
      </div>

      <div className="demo-status">
        <span className={`status-dot ${listening ? "status-dot--live" : ""}`} />
        <span>{listening ? "Listening..." : supported ? "Tap to speak" : "Voice input not supported in this browser"}</span>
      </div>

      <button className="demo-mic-btn" onClick={toggle} disabled={!supported} aria-label={listening ? "Stop listening" : "Start listening"}>
        {listening ? <Square size={20} fill="currentColor" /> : <Mic size={22} />}
        <span>{listening ? "Stop" : "Start speaking"}</span>
      </button>

      {error && <p className="demo-error">{error}</p>}

      {transcript && (
        <div className="demo-bubble demo-bubble--user">
          <span className="bubble-label">You said</span>
          <p>"{transcript}"</p>
        </div>
      )}

      {reply && (
        <div className="demo-bubble demo-bubble--bot">
          <Sparkles size={16} />
          <span className="bubble-label">Voxa</span>
          <p>{reply}</p>
        </div>
      )}

      {!transcript && !reply && (
        <div className="demo-suggestions">
          <p className="demo-suggestions-label">Try saying:</p>
          <div className="demo-chips">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="demo-chip" onClick={() => trySuggestion(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .demo-card {
          background: linear-gradient(180deg, #fff, var(--neutral-50));
          border: 1px solid var(--border);
          border-radius: var(--r-xl);
          padding: var(--space-5) var(--space-4);
          display: flex; flex-direction: column; align-items: center; gap: var(--space-3);
          box-shadow: var(--shadow-lg);
          max-width: 520px; margin: 0 auto;
        }
        .demo-orb-row { padding: var(--space-2) 0; }
        .demo-status {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: var(--text-muted); font-weight: 500;
        }
        .status-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--neutral-300); transition: all 0.3s;
        }
        .status-dot--live {
          background: var(--error-500);
          box-shadow: 0 0 0 4px rgba(240,72,72,0.18);
          animation: pulse-dot 1s infinite;
        }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        .demo-mic-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border-radius: var(--r-full);
          background: var(--brand); color: #fff; font-size: 15px; font-weight: 600;
          box-shadow: 0 4px 16px rgba(8,124,232,0.35);
          transition: all 0.3s var(--ease);
        }
        .demo-mic-btn:hover:not(:disabled) {
          background: var(--primary-700); transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(8,124,232,0.4);
        }
        .demo-mic-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .demo-error {
          font-size: 13px; color: var(--error-500); text-align: center;
          background: rgba(240,72,72,0.08); padding: 10px 16px; border-radius: var(--r-sm);
        }
        .demo-bubble {
          width: 100%; padding: var(--space-2) var(--space-3);
          border-radius: var(--r-md); animation: fadeUp 0.4s var(--ease);
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .demo-bubble--user {
          background: var(--primary-50); border: 1px solid var(--primary-100);
          text-align: right;
        }
        .demo-bubble--user p { font-size: 16px; color: var(--neutral-800); font-weight: 500; }
        .demo-bubble--bot {
          background: var(--neutral-900); color: var(--neutral-100);
          display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap;
        }
        .demo-bubble--bot p { font-size: 15px; color: var(--neutral-100); width: 100%; }
        .demo-bubble--bot .bubble-label { color: var(--accent-400); }
        .bubble-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; display: block; margin-bottom: 4px; }
        .demo-suggestions { width: 100%; text-align: center; }
        .demo-suggestions-label { font-size: 13px; color: var(--text-muted); margin-bottom: 12px; }
        .demo-chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .demo-chip {
          padding: 8px 16px; border-radius: var(--r-full);
          background: var(--neutral-100); border: 1px solid var(--border);
          font-size: 13px; font-weight: 500; color: var(--neutral-700);
          transition: all 0.25s var(--ease);
        }
        .demo-chip:hover {
          background: var(--primary-50); border-color: var(--primary-300);
          color: var(--primary-700); transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
