import React from 'react'
import './Footer.css';
import { NavLink } from "react-router-dom"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerA">
                <p>PUMPER-NIC®</p>
                <NavLink activeClassName="selected" exact to="/contact"><FontAwesomeIcon id="icon" icon={faEnvelope}/></NavLink>
                <p>CODERHOUSE PROJECT ®</p>
            </div>
            <div className="footerB"></div>
            <div className="footerC">
                <p>Web developed by Cristian M ®</p>
                <p>2021</p>
            </div>
        </div>
    )
}

export default Footer



