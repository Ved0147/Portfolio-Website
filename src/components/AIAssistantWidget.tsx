import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { API_BASE_URL } from "../config/api";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}
const suggestedQuestions = [
  "What technologies does Ved know?",
  "Tell me about Ved's projects",
  "What cloud experience does Ved have?",
  "What AI projects has Ved built?",
  "What companies has Ved worked for?"
];
export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi 👋 I'm Ved's AI Assistant. Ask me about skills, projects, experience etc"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/ai/ask`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: userMessage,
            history: messages.slice(-10)
          })
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.answer
        }
      ]);
      // await refreshAnalytics();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn't get a response."
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-trigger">
        💬
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50
            }}
            transition={{
              duration: 0.25
            }}
            className="ai-chat-window">
            {/* Header */}
            <div className="ai-chat-header">
              🤖 Ved AI Assistant
              <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            {/* Messages */}
            <div className="ai-chat-messages">
              {messages.length === 1 && (
                <div className="suggestions-container">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      className="suggestion-chip"
                      onClick={() => setQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: msg.sender === "user" ? 50 : -50
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className={`chat-bubble ${msg.sender === "user"
                    ? "user-bubble"
                    : "bot-bubble"
                    }`}
                >
                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>
                </motion.div>
              ))}
              <div ref={messagesEndRef}></div>

              {loading && (
                <div
                  style={{
                    background: "#f3f4f6",
                    padding: "10px",
                    borderRadius: "15px",
                    width: "fit-content"
                  }}
                >
                  ...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="ai-chat-input-area">
              <input
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
                placeholder="Ask something..."
                className="ai-chat-input"
              />

              <button onClick={askAI} className="ai-chat-send">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}