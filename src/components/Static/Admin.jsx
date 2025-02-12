import React, { useState, useEffect } from 'react';
import '../Static/Admin.css';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');
    const [partners, setPartners] = useState([]);
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newPartnerEmail, setNewPartnerEmail] = useState('');
    const [newPartnerId, setNewPartnerId] = useState('');
    const [role, setRole] = useState('user'); // Domyślnie ustawiamy rolę jako "user"

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);

        const storedPartners = JSON.parse(localStorage.getItem('partners')) || [];
        setPartners(storedPartners);
    }, []);

    const handleDeleteUser = (email) => {
        const updatedUsers = users.filter(user => user.email !== email);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const message = () => {
        alert("Wysłano prośbę o kontakt");
    };

    const handleEditUser = (email) => {
        setEditingUser(email);
    };

    const handleChangePassword = () => {
        if (!newPassword) return;
        const updatedUsers = users.map(user =>
            user.email === editingUser ? { ...user, password: newPassword } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setEditingUser(null);
        setNewPassword('');
    };

    const handleAddUserOrPartner = () => {
        if (role === 'user') {
            const newUser = { email: newUserEmail, password: newPassword };
            setUsers([...users, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setNewUserEmail('');
            setNewPassword('');
        } else if (role === 'partner') {
            const newPartner = { id: newPartnerId, email: newPartnerEmail, partner: newName };
            setPartners([...partners, newPartner]);
            localStorage.setItem('partners', JSON.stringify([...partners, newPartner]));
            setNewPartnerEmail('');
            setNewPartnerId('');
            setNewName('');
        }
    };

    return (
        <section>
            <div className="admin-panel">
                <h2>Panel Administratora</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.email}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEditUser(user.email)}>Zmień hasło</button>
                                <button className="delete-btn" onClick={() => handleDeleteUser(user.email)}>Usuń</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {editingUser && (
                    <div className="edit-section">
                        <h3>Zmień hasło dla {editingUser}</h3>
                        <input
                            type="password"
                            placeholder="Nowe hasło"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button className="save-btn" onClick={handleChangePassword}>Zapisz</button>
                        <button className="cancel-btn" onClick={() => setEditingUser(null)}>Anuluj</button>
                    </div>
                )}
            </div>

            <div className="admin-panel add">
                <h3>Dodaj Użytkownika / Partnera</h3>
                <input
                    type="email"
                    placeholder="Email"
                    value={role === 'user' ? newUserEmail : newPartnerEmail}
                    onChange={(e) => {
                        if (role === 'user') {
                            setNewUserEmail(e.target.value);
                        } else {
                            setNewPartnerEmail(e.target.value);
                        }
                    }}
                />

                {role === 'user' && (
                    <input
                        type="password"
                        placeholder="Hasło"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                )}

                <div>
                    <label>
                        <input
                            type="radio"
                            value="user"
                            checked={role === "user"}
                            onChange={() => setRole("user")}
                        />
                        Użytkownik
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="partner"
                            checked={role === "partner"}
                            onChange={() => setRole("partner")}
                        />
                        Partner
                    </label>
                </div>

                {role === 'partner' && (
                    <>
                        <input
                            type="number"
                            placeholder="ID Partnera"
                            value={newPartnerId}
                            onChange={(e) => setNewPartnerId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nazwa firmy"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </>
                )}
                <button onClick={handleAddUserOrPartner}>Dodaj</button>
            </div>

            <div className="admin-panel">
                <h2>Lista Partnerów</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firma</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {partners.map((partner) => (
                        <tr key={partner.id}>
                            <td>{partner.id}</td>
                            <td>{partner.partner}</td>
                            <td className="contactBtn">{partner.email} <button onClick={message}>Kontakt</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Admin;
