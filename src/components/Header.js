import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <ul>
                    <li><a href="/r/popular" class="active">Populor</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">Controversial</a></li>
                    <li><a href="/r/gilded">Gilded</a></li>
                </ul>
            </div>
            <div className="header__right">
                <button className="login"> Login </button>
                <button className="signup"> Sign Up </button>
                <div className="header__user">
                    
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}
