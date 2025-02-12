import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [view, setView] = useState('login');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const navigate = useNavigate();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const adminExists = storedUsers.some(user => user.email === 'admin@admin.com');
        const managerExists = storedUsers.some(user => user.email === 'kierownik@kierownik.com');

        if (!adminExists) {
            const adminUser = { email: 'admin@admin.com', password: 'admin' };
            storedUsers.push(adminUser);
        }

        if (!managerExists) {
            const managerUser = { email: 'kierownik@kierownik.com', password: 'kierownik' };
            storedUsers.push(managerUser);
        }

        localStorage.setItem('users', JSON.stringify(storedUsers));
    }, []);


    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
                const username = user.email.split('@')[0];
                if(user.email==="admin@admin.com"){
                    navigate(`/admin`);

                }else if(user.email==="kierownik@kierownik.com"){
                    navigate('/kierownik')
                }else{
                    navigate(`/logged/${username}`);

                }


        } else {
            alert('Niepoprawny email lub hasło!');
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== newConfirmPassword) {
            alert('Hasła muszą być identyczne!');
            return;
        }

        const newUser = { email: newEmail, password: newPassword };
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        alert('Rejestracja zakończona sukcesem!');
        setView('login');
    };

    const handleResetPasswordSubmit = (e) => {
        e.preventDefault();
        alert(`Instrukcje resetowania hasła zostały wysłane na adres: ${resetEmail}`);
        setView('login');
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
                        <form onSubmit={handleLoginSubmit} className="login-form">
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
                        <h2 className="login-title">Resetowanie hasła</h2>
                        <form onSubmit={handleResetPasswordSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="resetEmail"
                                    className="login-input"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    placeholder="Wprowadź adres e-mail"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Resetuj hasło</button>
                        </form>
                        <div className="login-footer">
                            <p>Wróć do logowania <a href="#" onClick={() => handleSwitchView('login')}>tutaj</a></p>
                        </div>
                    </>
                )}

                {view === 'register' && (
                    <>
                        <h2 className="login-title">Zarejestruj się</h2>
                        <form onSubmit={handleRegisterSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="newEmail"
                                    className="login-input"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="login-input"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Hasło"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="newConfirmPassword"
                                    className="login-input"
                                    value={newConfirmPassword}
                                    onChange={(e) => setNewConfirmPassword(e.target.value)}
                                    placeholder="Potwierdź Hasło"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Zarejestruj się</button>
                        </form>
                        <div className="login-footer">
                            <p>Masz już konto? <a href="#" onClick={() => handleSwitchView('login')}>Zaloguj się</a></p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
