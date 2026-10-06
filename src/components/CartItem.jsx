import React from 'react';

export default function CartItem({ item, onUpdate, onRemove }) {
    return (
        <div className="flex items-center border-b py-5 rounded-sm">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="ml-4 flex-grow">
                <h4 className="font-semibold">{item.name}</h4>
                <p>Rp{item.price.toLocaleString()}</p>
                <div className="mt-2">
                    <label>
                        Qty: 
                        <input type="number" min="1" value={item.quantity} onChange={e => onUpdate(item.id, parseInt(e.target.value) || 1)} className="w-15 ml-2 border rounded px-2" />
                    </label>
                </div>
            </div>
            <button onClick={() => onRemove(item.id)} className="text-red-500 cursor-pointer font-medium">Hapus</button>
        </div>
    );
}