//Navigation Bar

import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Navbar.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

export default function Search({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            await axios.get(`http://localhost:5000/games?question=${query}`)
            .then((response) => {
                onSearch(response.data)
            });
        } catch (error) {
            console.error('Error searching for games:', error);
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center" role="search">
                <input className="form-control me-2" style={{width:'14rem'}} 
                    type="search" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} aria-label="Search" />
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{ color: "#050505", marginRight: '1rem' }} /> */}
                <Button style={{backgroundColor:'#10195d',color:'white',marginRight:'0.2rem'}} variant='warning' onClick={handleSearch}>Search</Button>
            </div>
        </div>
    )
}
