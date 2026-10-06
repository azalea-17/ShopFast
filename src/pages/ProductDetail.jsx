import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find(p => p.id === productId);

    if(!product) {
        return <p>Produk tidak ditemukan.</p>;
    }

    return (
        <div className="md:flex md:space-x-6">
            <div className="md:w-1/2">
                <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
                <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                <p className="text-xl text-gray-700 font-bold mb-4">Rp{product.price.toLocaleString()}</p>
                <p className="mb-4">{product.description}</p>
                <button onClick={() => addToCart(product)} className="bg-axolotl text-white px-4 py-2 rounded hover:bg-sea-mist">
                Tambah ke Keranjang
                </button>
            </div>
        </div>
    );
}