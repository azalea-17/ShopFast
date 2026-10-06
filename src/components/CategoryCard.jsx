import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
    return (
        <Link to={`/category/${category.id}`} className="border rounded p-4 text-center text-white bg-axolotl hover:bg-sea-mist">
            <span className="block text-lg font-medium">{category.name}</span>
        </Link>
    );
}