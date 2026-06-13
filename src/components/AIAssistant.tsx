import { useState, useRef, useEffect } from "react";

interface Message {
    sender: "user" | "bot";
    text: string;
}


export default function AIAssistant() {
    const messagesEndRef =
        useRef<HTMLDivElement>(null);
    const [messages, setMessages] =
        useState<Message[]>([
            {
                sender: "bot",
                text:
                    "Hi! I'm Ved's AI Assistant. Ask me about skills, projects, experience, or career goals."
            }
        ]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
   useEffect(() => {

    if(chatContainerRef.current)
    {
        chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
    }

}, [messages]);
    const askQuestion = async () => {
        if (!question.trim()) return;
        const currentQuestion = question;
        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: currentQuestion
            }
        ]);
        setQuestion("");
        setLoading(true);
        try {
            const response =
                await fetch(
                    "https://portfolio-api-58436098425.asia-south1.run.app/api/ai",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            question: currentQuestion
                        })
                    }
                );

            const data = await response.json();

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: data.answer
                }
            ]);
        }
        catch {

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text:
                        "Sorry, I couldn't process your request."
                }
            ]);

        }

        setLoading(false);
    };
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                        🤖 AI Assistant
                    </span>

                    <h2 className="text-5xl font-bold mt-4">
                        Ask Ved Anything
                    </h2>

                    <p className="text-gray-500 mt-4 text-lg">
                        Learn about my skills, projects, experience and cloud journey.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                    <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-white">
                        <h3 className="text-xl font-semibold">
                            Ved AI Assistant
                        </h3>

                        <p className="opacity-90 mt-1">
                            Ask about skills, projects, cloud technologies and career goals.
                        </p>
                    </div>

                    <div className="p-6">

                        <div className="bg-gray-50 rounded-2xl p-5 min-h-[180px] border">
                            <div className="bg-gray-50 rounded-2xl p-5 min-h-[350px] border overflow-y-auto">
                                <div  ref={chatContainerRef} className="bg-gray-50 rounded-2xl p-5 h-[400px] border overflow-y-auto">

                                    {messages.map((message, index) => (

                                        <div
                                            key={index}
                                            className={`mb-4 flex ${message.sender === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                                }`}
                                        >
                                            <div
                                                className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.sender === "user"
                                                    ? "bg-emerald-600 text-white"
                                                    : "bg-white border"
                                                    }`}
                                            >
                                                {message.text}
                                            </div>
                                        </div>

                                    ))}

                                    {loading && (

                                        <div className="flex justify-start">

                                            <div className="bg-white border px-4 py-3 rounded-2xl">
                                                Ved AI is typing...
                                            </div>

                                        </div>

                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex gap-3">
                            <div className="flex flex-wrap gap-2 mb-4">

                                {[
                                    "What skills does Ved have?",
                                    "What projects has Ved built?",
                                    "What is Ved's career goal?",
                                    "Tell me about Ved"
                                ].map((item) => (

                                    <button
                                        key={item}
                                        onClick={() => setQuestion(item)}
                                        className="px-3 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                                    >
                                        {item}
                                    </button>

                                ))}

                            </div>
                            <input
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        askQuestion();
                                    }
                                }}
                            />

                            <button
                                onClick={askQuestion}
                                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 rounded-xl font-medium transition"
                            >
                                Ask
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}