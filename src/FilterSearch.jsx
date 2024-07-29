import React, { useState } from 'react';
import './FilterSearch.css';

function FilterSearch() {
    const Fruitdata = [
        { name: "apple", price: 100.2 },
        { name: "banana", price: 2000.5 },
        { name: "cherry", price: 30000.0 },
        { name: "date", price: 20000.5 },
        { name: "elderberry", price: 49999.0 },
        { name: "fig", price: 10000.8 },
        { name: "grape", price: 2333.2 },
        { name: "honeydew", price: 377.5 },
        { name: "kiwi", price: 0.9 },
        { name: "lemon", price: 0.7 },
        { name: "mango", price: 1000.5 },
        { name: "nectarine", price: 2.0 },
        { name: "orange", price: 1.1 },
        { name: "papaya", price: 2.8 },
        { name: "quince", price: 3.3 }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const filterResult = Fruitdata.filter(fruit => {
        const matchesQuery = fruit.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMinPrice = minPrice === '' || fruit.price >= parseFloat(minPrice);
        const matchesMaxPrice = maxPrice === '' || fruit.price <= parseFloat(maxPrice);
        return matchesQuery && matchesMinPrice && matchesMaxPrice;
    });

    return (
        <div className="filter-search-container">
            <div className="filter-search-inputs">
                <input
                    type='text'
                    placeholder='Search here...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="filter-search-input"
                />
                <input
                    type='number'
                    placeholder='Min price'
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="filter-search-input"
                />
                <input
                    type='number'
                    placeholder='Max price'
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="filter-search-input"
                />
            </div>
            <ul className="filter-search-list">
                {filterResult.length > 0 ? (
                    filterResult.map((fruit, index) => (
                        <li key={index} className="filter-search-item">
                            {fruit.name} - Rs. {fruit.price.toFixed(2)}
                        </li>
                    ))
                ) : (
                    <li className="no-results">No results found</li>
                )}
            </ul>
        </div>
    );
}

export default FilterSearch;
