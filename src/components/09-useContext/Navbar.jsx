import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom"

import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <NavLink to="/" className={ args => args.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                   
                </ul>

            </div>
        </nav>
    )
}
