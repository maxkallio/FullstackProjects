import React, { useEffect, useState } from 'react';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5004/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div>
            <h2>Rust Marketplace</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.imageUrl} alt={item.name} width="50" />
                        <b>{item.name}</b> - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;