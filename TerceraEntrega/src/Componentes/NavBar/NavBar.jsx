import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'; 

import "./NavBar.css";

const NavBar = () => {
return (
    <div id="aside">
        <div id='logo'>
            <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="" />
        </div>
        <Link to={"/"}>
            <Button variant="contained">Inicio</Button>
        </Link>
        <Link to={"/Humans"}>
            <Button variant="contained">Humanos</Button>
        </Link>
        <Link to={"/NotHuman"}>
            <Button variant="contained">Humanosn't</Button>
        </Link>
        <Link to={"/About"}>
            <Button variant="contained">Acerca de nosotros</Button>
        </Link>
    </div>
)
}

export default NavBar
