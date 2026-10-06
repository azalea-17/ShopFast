import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const res = login({ email, password });
        if(res.success) {
            navigate('/');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="w-full max-w-120 mx-auto p-6 border-none rounded-md bg-neutral-50 flex flex-col shadow-md *:justify-center">
            <h1 className="flex text-2xl font-semibold mb-4">Login</h1>
            <p className="flex">Selamat datang kembali! Silakan masukkan data anda.</p> 
            {error && <p className="text-red-500">{error}</p>}
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
                <button type="submit" className="w-35 bg-axolotl text-white px-4 py-2 ml-3 rounded hover:bg-sea-mist cursor-pointer ">Login</button>
                <hr className="my-4" />
            </form>
            <p className="flex mt-4">
                Belum punya akun? Register<Link to="/register" className="text-blue-600 hover:underline ml-1">di sini</Link>
            </p>
        </div>
    );
}