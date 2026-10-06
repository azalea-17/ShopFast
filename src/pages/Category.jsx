import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

export default function CategoryPage() {
    const { categoryId } = useParams();
    const { addToCart } = useContext(CartContext);
    const category = categories.find(c => c.id === categoryId);
    const filtered = products.filter(p => p.category === categoryId || p.type === categoryId);

    if(!category) {
        return <p className="font-medium">Kategori tidak ditemukan.</p>;
    }

    return (
        <div className="flex flex-col rounded-lg bg-neutral-50 px-4 py-6 mt-6">
            <h1 className="text-2xl font-medium mb-4">Kategori: {category.name}</h1>
            {filtered.length === 0 ? (
                <p className="font-medium">Belum ada produk untuk kategori ini.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    {filtered.map(prod => (
                        <ProductCard key={prod.id} product={prod} onAdd={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}