import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        alert('Mohon maaf, fitur checkout belum tersedia :)');
    };

    if(cartItems.length === 0) {
        return <p className="font-medium ">Keranjang kosong.</p>;
    }

    return (
        <div className="bg-neutral-50 p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Keranjang</h1>
            <div className="p-4 space-y-4 bg-ivory">
                {cartItems.map(item => (
                <CartItem key={item.id} item={item} onUpdate={updateQuantity} onRemove={removeFromCart} />
                ))}
            </div>
            <div className="p-4 bg-ivory mt-6 flex justify-between items-center">
                <span className="text-xl font-bold">Total: Rp{totalPrice.toLocaleString()}</span>
                <button onClick={handleCheckout} className="bg-axolotl text-white px-4 py-2 rounded hover:bg-sea-mist cursor-pointer">
                Checkout
                </button>
            </div>
        </div>
    );
}