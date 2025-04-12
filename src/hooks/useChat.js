// useChat.js
import { useEffect, useState } from "react";

const LOCAL_KEY = "chat-history";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


const useChat = () => {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem(LOCAL_KEY);
        return saved ? JSON.parse(saved) : [];
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(messages));
    }, [messages]);

    const sendMessage = async (text) => {
        if (!text.trim()) {
            setError("Please enter a message.");
            return;
        }

        const userMsg = { role: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setError("");
        setLoading(true);

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: "user",
                                parts: [{ text }],
                            },
                        ],
                    }),
                }
            );

            if (!res.ok) throw new Error("API Error");

            const result = await res.json();
            const aiReply = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
            const aiMsg = { role: "ai", text: aiReply };
            setMessages((prev) => [...prev, aiMsg]);
        } catch (err) {
            setMessages((prev) => [...prev, { role: "ai", text: "Something went wrong." }]);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const clearMessages = () => {
        setMessages([]);
        localStorage.removeItem(LOCAL_KEY);
    };

    return { messages, sendMessage, clearMessages, error, loading };
};

export default useChat;
