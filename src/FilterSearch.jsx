import React, { useState } from 'react';

function FilterSearch() {
    const Fruitdata = [
        "apple", "banana", "cherry", "date", "elderberry", 
        "fig", "grape", "honeydew", "kiwi", "lemon", 
        "mango", "nectarine", "orange", "papaya", "quince"
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filterResult = Fruitdata.filter(fruit =>
        fruit.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type='text'
                placeholder='Search here...'
                value={searchQuery}
                onChange={handleChange}
            />
            <ul>
                {filterResult.length > 0 ? (
                    filterResult.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Fruit Filter Search</h1>
                <FilterSearch />
            </header>
        </div>
    );
}

export default App;
