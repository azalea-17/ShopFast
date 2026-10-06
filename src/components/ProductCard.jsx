import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="border rounded-lg p-4 flex flex-col bg-ivory">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
            </Link>
            <p className="mt-auto font-bold">Rp{product.price.toLocaleString()}</p>
            <button onClick={() => onAdd(product)} className="mt-2 bg-axolotl text-white py-1 rounded hover:bg-sea-mist">
                Tambah ke Keranjang
            </button>
        </div>
    );
}