import { useState } from "react";

export default function AIAssistant() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askQuestion = async () => {
        if (!question.trim()) return;

        setLoading(true);

        try {
            const response = await fetch(
                "https://localhost:7068/api/ai", // Replace with your API URL
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question,
                    }),
                }
            );

            const data = await response.json();
            setAnswer(data.answer);
        } catch {
            setAnswer("Unable to get response.");
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

                            {!answer && !loading && (
                                <div className="text-gray-500">
                                    Try asking:
                                    <ul className="mt-3 space-y-2">
                                        <li>• What cloud skills does Ved know?</li>
                                        <li>• What projects has Ved built?</li>
                                        <li>• What is Ved's career goal?</li>
                                        <li>• What technologies does Ved work with?</li>
                                    </ul>
                                </div>
                            )}

                            {loading && (
                                <div className="text-emerald-600 font-medium">
                                    Thinking...
                                </div>
                            )}

                            {answer && (
                                <div>
                                    <div className="font-semibold text-emerald-700 mb-2">
                                        Ved AI:
                                    </div>

                                    <p className="text-gray-700 leading-7">
                                        {answer}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="mt-5 flex gap-3">

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