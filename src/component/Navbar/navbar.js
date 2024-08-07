import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark border-bottom navbar-expand-lg border-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/company">Company</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/dashboard">
                        Dashboard
                        <span className="badge">84</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/notifications">
                        Notifications
                        <span className="badge">42</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/statistics">Statistics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/setting">Setting</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link ms-4" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-4 me-3" to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
