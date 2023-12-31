import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className={'mainNav'}>
                <h1> <a className={'logo'} href={'https://www.forbes.ru/forbeslife/dosug/262327-na-vse-vremena-100-vdokhnovlyayushchikh-tsitat'}>collection of quotes</a></h1>

                <ul className={'navList'}>
                    <li className={'navItem'}>
                        <NavLink to='/' exact className={'navLink'}>Quotes</NavLink>
                    </li>
                    <li className={'navItem'}>
                        <NavLink to='/add' className={'navLink'}>Submit new quote</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;