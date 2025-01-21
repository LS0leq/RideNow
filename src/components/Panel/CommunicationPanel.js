import React, { useState } from 'react';

const CommunicationPanel = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        alert(`Wiadomość wysłana: ${message}`);
        setMessage('');
        setFormVisible(false);
    };

    return (
        <div className="panel-container">
            <h3>Kontakt z pomocą techniczną</h3>

            {!isFormVisible ? (
                <button onClick={() => setFormVisible(true)}>Skontaktuj się z pomocą</button>
            ) : (
                <div>
          <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Wpisz wiadomość..."
          />
                    <br />
                    <button onClick={handleSendMessage}>Wyślij wiadomość</button>
                    <button onClick={() => setFormVisible(false)}>Anuluj</button>
                </div>
            )}
        </div>
    );
};

export default CommunicationPanel;
