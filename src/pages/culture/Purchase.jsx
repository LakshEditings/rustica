import React, { useState } from 'react';
import { ShoppingBag, Plus, X, Search, MapPin } from 'lucide-react';
import Card from '../../components/Card';

const Purchase = () => {
    const [locationSelected, setLocationSelected] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const [products, setProducts] = useState([
        { id: 1, name: 'Handmade Basket', price: '₹450', img: 'https://via.placeholder.com/200?text=Basket' },
        { id: 2, name: 'Clay Pot', price: '₹120', img: 'https://via.placeholder.com/200?text=Pot' },
        { id: 3, name: 'Silk Scarf', price: '₹850', img: 'https://via.placeholder.com/200?text=Scarf' },
    ]);

    if (!locationSelected) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center animate-fade-in shadow-2xl">
                    <MapPin size={48} className="mx-auto text-orange-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Local Market</h2>
                    <p className="text-gray-500 mb-6">Select your village to see available products.</p>
                    <button onClick={() => setLocationSelected(true)} className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition mb-3">
                        Current Location
                    </button>
                    <button onClick={() => setLocationSelected(true)} className="w-full bg-orange-100 text-orange-700 py-3 rounded-xl font-bold hover:bg-orange-200 transition">
                        Select Manually
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6 animate-fade-in">
            {/* Search Bar */}
            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder="Search for pottery, fabrics, crafts..."
                    className="w-full p-4 pl-12 rounded-full border-2 border-orange-100 focus:border-orange-500 outline-none shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(p => (
                    <Card key={p.id} className="p-4 hover:shadow-xl border-orange-50">
                        <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                        <h3 className="font-bold text-gray-800 text-lg">{p.name}</h3>
                        <p className="text-orange-600 font-bold text-xl mt-1">{p.price}</p>
                        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition">Buy Now</button>
                    </Card>
                ))}
            </div>

            <button
                onClick={() => setShowAddModal(true)}
                className="fixed bottom-8 right-8 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition"
            >
                <Plus size={32} />
            </button>

            {/* Add Product Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative animate-slide-up">
                        <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-orange-600">Sell Product</h3>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            setProducts([...products, { id: Date.now(), name: 'New Item', price: '₹0', img: 'https://via.placeholder.com/200' }]);
                            setShowAddModal(false);
                        }}>
                            <input type="text" placeholder="Product Name" className="w-full p-3 border rounded-lg" required />
                            <input type="text" placeholder="Price (₹)" className="w-full p-3 border rounded-lg" required />
                            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700">List Item</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Purchase;
