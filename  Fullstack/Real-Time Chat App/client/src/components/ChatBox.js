import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5002');

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages((prev) => [...prev, data]);
        });
    }, []);

    const sendMessage = () => {
        socket.emit('message', { username: "User", text: message });
        setMessage("");
    };

    return (
        <div>
            <h2>Live Chat</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}><b>{msg.username}:</b> {msg.text}</li>
                ))}
            </ul>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatBox;