import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-sea-mist py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} ShopFast. All rights reserved.
        </div>
        </footer>
    );
}