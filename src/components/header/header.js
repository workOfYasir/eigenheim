import React from 'react'
import logo from "../../images/logo.png"
import '../header/header.scss'

export default function Header() {
    return (
        <div id="header">
            <div id="header_left">
            <img className="top-logo" src={logo}></img>
            </div>
        </div>
    )
}
