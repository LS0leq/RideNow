import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [view, setView] = useState('login');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    const handleSwitchView = (viewType) => {
        setView(viewType);
    };

    return (
        <div className="login-form-container">
            <div className="login-form-box">
                {view === 'login' && (
                    <>
                        <h2 className="login-title">Zaloguj się</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="password"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Hasło"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Zaloguj się</button>
                        </form>
                        <div className="login-footer">
                            <a href="#" onClick={() => handleSwitchView('forgotPassword')}>Zapomniałeś hasła?</a>
                            <p>Nie masz konta? <a href="#" onClick={() => handleSwitchView('register')}>Zarejestruj się</a></p>
                        </div>
                    </>
                )}

                {view === 'forgotPassword' && (
                    <>
                        <h2 className="login-title">Resetuj Hasło</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Podaj swój email"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Resetuj Hasło</button>
                        </form>
                        <div className="login-footer">
                            <a href="#" onClick={() => handleSwitchView('login')}>Wróć do logowania</a>
                        </div>
                    </>
                )}

                {view === 'register' && (
                    <>
                        <h2 className="login-title">Zarejestruj się</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="password"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Hasło"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Zarejestruj się</button>
                        </form>
                        <div className="login-footer">
                            <a href="#" onClick={() => handleSwitchView('login')}>Wróć do logowania</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
