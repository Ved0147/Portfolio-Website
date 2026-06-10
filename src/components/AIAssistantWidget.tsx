import { useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi 👋 I'm Ved's AI Assistant. Ask me about skills, projects, experience or career goals."
    }
  ]);

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
      const response = await fetch(
        "http://localhost:5133/api/ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: userMessage
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          border: "none",
          fontSize: "28px",
          cursor: "pointer",
          background: "#0f766e",
          color: "white",
          zIndex: 9999
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "380px",
            height: "550px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#0f766e",
              color: "white",
              padding: "15px",
              fontWeight: "bold"
            }}
          >
            🤖 Ask Ved AI
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    msg.sender === "user"
                      ? "flex-end"
                      : "flex-start",
                  maxWidth: "80%",
                  padding: "10px 14px",
                  borderRadius: "15px",
                  background:
                    msg.sender === "user"
                      ? "#0f766e"
                      : "#f3f4f6",
                  color:
                    msg.sender === "user"
                      ? "white"
                      : "#111"
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "10px",
                  borderRadius: "15px",
                  width: "fit-content"
                }}
              >
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #eee"
            }}
          >
            <input
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc"
              }}
            />

            <button
              onClick={askAI}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "none",
                background: "#0f766e",
                color: "white",
                cursor: "pointer"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}