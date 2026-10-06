import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const { cartItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-sea-mist">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">ShopFast</Link>
                <nav className="space-x-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-800 hover:underline' : 'text-gray-800 hover:underline'}>Home</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    {user ? ( 
                        <>
                            <span className="text-gray-700">{user.email}</span>
                            <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-gray-600 hover:underline">Login</Link>
                    )}
                    <Link to="/cart" className="relative hover:underline">
                        <span className="material-icons">Cart</span>
                        {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartItems.length}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};