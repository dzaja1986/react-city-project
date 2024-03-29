import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss'


export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                    home</a>
                    </li>
                    <li>
                    <a href="/" className="nav-link">
                    Milan Miloradovic</a>
                    </li>
                    <li>
                    <a href="/" className="nav-link">
                    Luka Miloradovic</a>
                    </li>
            </ul>
        </nav>
    )
}