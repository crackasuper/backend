import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../static/logo.png';
import "../App.css"

const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className = "app-logo" href="/">
                    <img
                       src={logo}
                       width="40"
                       height="50"
                       className="d-inline-block align-center"
                       alt="Reat bootstrap logo"
                       
                    />
                    Student Management System
                

                </Navbar.Brand>
            </Navbar>
            
        </div>
        );
};
export default Navigation;