import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirm) {
            setError('Password dan konfirmasi tidak sama.');
            return;
        }
        register({ email, password });
        navigate('/');
    };

    return (
        <div className="w-full max-w-120 mx-auto p-6 border-none rounded-md bg-neutral-50 flex flex-col shadow-md *:justify-center">
            <h1 className="flex text-2xl font-semibold mb-4">Register</h1>
            <p className="flex">Silakan masukkan data anda untuk membuat akun baru.</p>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <hr className="my-4" />
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mx-3">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div className="mx-3">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div className="mx-3">
                    <label>Konfirmasi Password</label>
                    <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <button type="submit" className="w-35 bg-axolotl text-white px-4 py-2 ml-3 rounded hover:bg-sea-mist">Register</button>
            </form>
            <hr className="my-4" />
            <p className="mt-4 flex">
                Sudah punya akun? Login<Link to="/login" className="text-blue-600 hover:underline ml-1">di sini</Link>
            </p>
        </div>
    );
}