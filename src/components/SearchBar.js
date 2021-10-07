import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="searchbar">
            <label htmlFor="searchbar">
                <i className="fas fa-search" />
            </label>
            <input id="searchbar" placeholder="Search" />
        </div>
    );
}

