import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('shopfast_user');
        if(stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    const register = ({ email, password }) => {
        const userData = { email, password };
        localStorage.setItem('shopfast_user', JSON.stringify(userData));
        setUser({ email });
        return true;
    };

    const login = ({ email, password }) => {
        const stored = localStorage.getItem('shopfast_user');
        if(stored) {
            const parsed = JSON.parse(stored);
            if(parsed.email === email && parsed.password === password) {
                setUser({ email });
                return { success: true };
            }
            return { success: false, message: 'Email atau password salah.' };
        }
        return { success: false, message: 'Akun tidak ditemukan. Silakan register.' };
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};