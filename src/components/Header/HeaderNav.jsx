import React from 'react';
import {Link} from "react-router-dom";

const MENU=[
    {name:'NEW CARS', link:'#'}, {name:'PRE-OWNED CARS', link:'#'},{name:'FINANCE', link:'#'},{name:'LEASE VS BUY', link:'#'},{name:'CONTACT US', link:'/contacts'}
]
const HeaderNav = () => {
    return (
        <nav className='nav-menu'>
            <ul className="menu__list">
                {MENU.map(({name,link}) =>{
                    return <li key={name} className='menu__list-item'>
                        <Link className='menu__list-link' to={link}>{name}</Link>
                    </li>
                })}
            </ul>
        </nav>
    );
};

export default HeaderNav;