import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.div}>
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'plus-junior'}>plus-junior</NavLink>

        </div>
    )
}

export default Header
