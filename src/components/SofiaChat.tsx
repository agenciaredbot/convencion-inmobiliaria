"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function SofiaChat({ pageSource = "asistentes" }: { pageSource?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Send initial greeting when first opened
  useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true);
      const greeting: Message = {
        role: "assistant",
        content:
          "¡Hola! 👋 Soy **Sofía**, tu asistente de la Convención Inmobiliaria 2026.\n\n¿Cómo te llamas? ¿Vienes como asistente o te interesa ser sponsor?",
      };
      setMessages([greeting]);
    }
  }, [open, hasOpened]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, pageSource }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Disculpa, tuve un problema técnico. Puedes contactarnos directamente por WhatsApp: https://wa.me/17542804030 😊",
        },
      ]);
    }
    setLoading(false);
  }

  function formatMessage(text: string) {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>")
      .replace(
        /(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener" class="text-gold-500 underline hover:text-gold-400">$1</a>'
      );
  }

  return (
    <>
      {/* Float button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
          >
            {/* Text bubble */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="bg-white text-navy-950 text-xs font-bold px-4 py-2 rounded-xl shadow-lg relative"
            >
              💬 ¡Pregúntame lo que necesites!
              <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white rotate-45" />
            </motion.div>

            {/* Agent image button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/60 transition-shadow duration-300"
            >
              <img
                src="/sofia-agente.png"
                alt="Sofía — Asistente IA"
                className="w-full h-full object-cover rounded-full border-3 border-gold-500"
              />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-500/50 animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gold-500/20 animate-ping pointer-events-none" />
              {/* Online badge */}
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-50 w-[440px] max-w-[calc(100vw-2rem)] h-[680px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-5 py-4 flex items-center gap-3 border-b border-white/10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-950 font-bold text-sm">
                  S
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-navy-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Sofía — Asistente IA</h3>
                <p className="text-green-400 text-xs">En línea</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy-950/95 backdrop-blur-xl">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gold-500 text-navy-950 rounded-br-sm"
                        : "bg-white/10 text-white rounded-bl-sm"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(msg.content),
                    }}
                  />
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gold-500/60 animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 rounded-full bg-gold-500/60 animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 rounded-full bg-gold-500/60 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="bg-navy-900 border-t border-white/10 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center hover:bg-gold-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
              <p className="text-center text-white/20 text-[10px] mt-2">
                Sofía · Asistente IA · Convención Inmobiliaria 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
