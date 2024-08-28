import React from 'react'
import { useEffect, useState } from 'react';
import Dropdown from '../utils/Dropdown';
import Filter from '../utils/Filter';
import '../styles/shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('Recommended');

    const sortOptions = [
        'Recommended',
        'Newest First',
        'Popular',
        'Price : High to Low',
        'Price : Low to High',
    ];

    const handleSortSelect = (option) => {
        setSortOption((preOption) => {
            return [...preOption, sortOption]
        });
        console.log(`Selected option: ${option}`);
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="content">
                <aside className="sidebar">
                    <Filter />
                </aside>
                <main className="main-content">
                    <header className="header">
                        <h1>Discover Our Products</h1>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </header>

                    <div className="sort-filter">
                        <Dropdown options={sortOptions} onSelect={handleSortSelect} />
                    </div>

                    <section className="product-list">
                        {products.map((product) => (
                            <div key={product.id} className="product-item">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        </>
    )
}

export default Shop;