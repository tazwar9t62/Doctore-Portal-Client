import React from 'react';
import NavHeader from '../NavHeader/NavHeader';
import MainHeader from './MainHeader';
import "./Header.css"
import BusinessInfo from './BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <NavHeader/>
            <MainHeader/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;