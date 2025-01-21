import React, { useState } from 'react';

const CommunicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [faq, setFaq] = useState([
        { question: 'Jak mogę zmienić swoje dane?', answer: 'Aby zmienić swoje dane, przejdź do ustawień profilu.', isOpen: false },
        { question: 'Jak anulować rezerwację?', answer: 'Skontaktuj się z administracją lub użyj opcji anulowania w szczegółach rezerwacji.', isOpen: false },
        { question: 'Czy mogę zmienić metodę płatności?', answer: 'Tak, możesz to zrobić w sekcji "Płatności" w swoim profilu.', isOpen: false },
    ]);

    const [messageHistory, setMessageHistory] = useState([
        { id: 1, subject: 'Problem z płatnością', date: '2023-12-20', status: 'Rozwiązany' },
        { id: 2, subject: 'Zapytanie o pojazdy', date: '2023-12-18', status: 'Oczekuje na odpowiedź' },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Wiadomość została wysłana!');
    };

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item)));
    };

    return (
        <div className="communication-panel">
            <h1>Kontakt z administracją</h1>

            <section className="contact-form">
                <h3>Wyślij wiadomość</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Imię i nazwisko</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Temat</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Wybierz temat</option>
                            <option value="problem">Problem techniczny</option>
                            <option value="payment">Płatności</option>
                            <option value="reservation">Rezerwacje</option>
                            <option value="other">Inne</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Wiadomość</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </section>

            <section className="faq">
                <h3>Najczęściej zadawane pytania</h3>
                {faq.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleFaq(index)}>
                            {item.question}
                        </button>
                        {item.isOpen && <p className="faq-answer">{item.answer}</p>}
                    </div>
                ))}
            </section>


        </div>
    );
};

export default CommunicationForm;
