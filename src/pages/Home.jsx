import React, { useContext } from 'react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

export default function Home() {
    const { addToCart } = useContext(CartContext);
    const featured = products.slice(0, 4);
    return (
        <div>
        <section className="mb-8 flex flex-col md:flex-row items-center bg-neutral-50 border-none p-6 rounded-lg">
            <div className="flex-grow bg-neutral-50">
                <h1 className="text-3xl font-bold mb-4">Selamat Datang di ShopFast!</h1>
                <p className="mb-4">Temukan pakaian terbaik untuk pria dan wanita dengan cepat dan mudah!</p>
                <a href="#categories" className="bg-axolotl text-white px-4 py-2 rounded hover:bg-sea-mist">Mulai Belanja</a>
            </div>
        </section>
        
        <section id="categories" className="mb-8 bg-neutral-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Kategori</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(cat => (
                    <CategoryCard key={cat.id} category={cat} />
                ))}
            </div>
        </section>

        <section className="mb-8 bg-neutral-50 border-none p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Produk Unggulan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featured.map(prod => (
                    <ProductCard key={prod.id} product={prod} onAdd={addToCart} />
                ))}
            </div>
        </section>
        </div>
    );
}