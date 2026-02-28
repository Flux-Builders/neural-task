import { useState, useRef, useEffect } from "react";
import {
  Cpu,
  Send,
  Sparkles,
  Terminal,
  Code2,
  Zap,
  History,
  Bot,
  User,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
  Settings,
} from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

const AICopilot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I am your Neural Co-Pilot. How can I assist you with your tasks today? I can help with code refactoring, task prioritization, or workflow automation.",
      timestamp: "10:00 AM",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I've analyzed your request: "${userMessage.content}". Based on your current task load and priority matrix, I recommend focusing on the API Gateway refactor first. Would you like me to generate a plan for that?`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestions = [
    {
      icon: Code2,
      label: "Refactor Auth Logic",
      detail: "Optimize JWT validation flow",
    },
    {
      icon: Zap,
      label: "Automate Standup",
      detail: "Generate daily synthesis report",
    },
    {
      icon: Terminal,
      label: "Review PR #42",
      detail: "Analyze security implications",
    },
  ];

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">
            Neural Processing Online
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Cpu className="w-8 h-8" />
            AI Co-Pilot
          </h1>
          <p className="text-slate-400 max-w-lg">
            Harness the power of neural intelligence to accelerate your
            development workflow.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <History className="w-4 h-4" />
            Sessions
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Models
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
        {/* Main Chat Area */}
        <div className="lg:col-span-8 flex flex-col glass-card border-white/5 overflow-hidden">
          {/* Chat Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === "assistant" ? "" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                    msg.role === "assistant"
                      ? "bg-teal-trust/10 border-teal-trust/20 text-teal-trust"
                      : "bg-white/5 border-white/10 text-slate-400"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-6 h-6" />
                  ) : (
                    <User className="w-6 h-6" />
                  )}
                </div>

                <div
                  className={`max-w-[80%] space-y-2 ${msg.role === "user" ? "text-right" : ""}`}
                >
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-white/5 border border-white/5 text-slate-200"
                        : "bg-teal-trust text-obsidian font-medium"
                    }`}
                  >
                    {msg.content}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 px-1">
                    <span>{msg.timestamp}</span>
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity">
                        <button className="hover:text-teal-trust">
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button className="hover:text-red-400">
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                        <button className="hover:text-white">
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-trust/10 border border-teal-trust/20 flex items-center justify-center text-teal-trust">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex gap-1">
                  <div className="w-1.5 h-1.5 bg-teal-trust rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-teal-trust rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-teal-trust rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/5 bg-obsidian-lighter/50">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask your neural co-pilot anything..."
                className="w-full bg-obsidian-darker border border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:border-teal-trust/50 transition-colors resize-none h-14"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-teal-trust text-obsidian rounded-xl hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-slate-600">
                Neural Engine v2.4.0 • 128k context window
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 bg-gradient-to-b from-teal-trust/5 to-transparent">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-teal-trust" />
              <h3 className="text-lg font-bold">Smart Suggestions</h3>
            </div>

            <div className="space-y-3">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="w-full text-left p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-teal-trust/10 hover:border-teal-trust/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <s.icon className="w-4 h-4 text-teal-trust" />
                    <span className="text-sm font-bold text-slate-200 group-hover:text-teal-trust transition-colors">
                      {s.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pl-7">{s.detail}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-amber-strategic/10 bg-amber-strategic/5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-strategic" />
              <h3 className="text-lg font-bold">Optimization Tips</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Based on your neural activity, you're most productive between{" "}
              <span className="text-amber-strategic font-bold">
                9:00 AM - 11:30 AM
              </span>
              . I've blocked out deep work time on your calendar for tomorrow.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <button className="w-full btn-outline text-[10px] py-1.5">
                View Efficiency Report
              </button>
            </div>
          </div>

          <div className="glass-card p-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
              <MoreHorizontal className="w-4 h-4 text-slate-600" />
            </div>
            <h3 className="text-sm font-bold mb-3">Model Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Processing Load</span>
                <span className="text-teal-trust">12%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-teal-trust w-[12%]"></div>
              </div>
              <div className="flex justify-between text-xs pt-2">
                <span className="text-slate-500">Response Latency</span>
                <span className="text-slate-300">142ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
