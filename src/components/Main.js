import React from 'react';
import Header from './Header.js'
import Posts from './Posts.js'
import './Main.css'

export default function Main(props) {
    return (
        <div className="main">
            <Header />
            <Posts />
        </div>
    );
}
