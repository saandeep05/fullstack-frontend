import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">User Database</Link>
                <Link className="btn btn-outline-primary" to="/adduser">Add User</Link>
            </div>
        </nav>
  );
}
