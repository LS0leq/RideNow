import React, { useState } from 'react';
import chatIcon from './chat.svg'; // Załaduj plik SVG

const ChatComponent = () => {
    const [isOpen, setIsOpen] = useState(false); // Stan, który decyduje, czy czat jest otwarty
    const [message, setMessage] = useState(''); // Stan na wiadomość
    const [messages, setMessages] = useState([]); // Historia wiadomości

    // Funkcja zmieniająca stan otwartego/zamkniętego czatu
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = () => {
        if (message.trim() === '') return;
        setMessages([...messages, { sender: 'User', text: message }]);
        setMessage('');
    };

    return (
        <div className={`chat-container ${isOpen ? 'open' : ''}`}>
            {!isOpen && (
                <div className="chat-toggle" onClick={toggleChat}>
                    <img
                        style={{
                            width: '40px'
                        }}
                        src={chatIcon}
                        alt="Chat Icon"
                    />
                </div>

            )}

            {/* Okno czatu */}
            {isOpen && (
                <div className="chat-box">

                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender === 'User' ? 'user' : 'admin'}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Wprowadź wiadomość"
                        />
                        <button onClick={sendMessage}>Wyślij</button>
                    </div>

                    <div className="chat-footer">
                        <button onClick={toggleChat}>Zamknij</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
