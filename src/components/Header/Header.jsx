import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import HeaderNav from "./HeaderNav";


const Header = ({headerTransparend}) => {
    return (
        <header className={`header ${headerTransparend && 'header-main'}`}>
            <div className="container">
                <div className="header__inner">
                    <Link to={'/'} className="logo">
                        <img src={logo} alt="logo" className='logo__img'/>
                    </Link>
                    <HeaderNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;