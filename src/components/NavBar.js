import React from 'react';
import Actions from './Actions.js';
import Logo from './Logo.js';
import SearchBar from './SearchBar.js';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <Logo />
            <SearchBar />
            <Actions />
        </div>
    );
}
