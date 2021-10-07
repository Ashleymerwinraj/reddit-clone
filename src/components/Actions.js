import React from 'react';
import Button from './Button.js'
import './NavBar.css';

export default function Actions() {
    return (
        <div className="actions">
            <Button label="Log In" />
            <Button primary label="Sign Up" />
            <Button label=""/>
        </div>
    );
}
