import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { content } from './Header.config';

import './Header.scss';

function Header() {
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const [showNav, setShowNav] = useState(false)

    const {
        Marketplace,
        Roulette,
        Game,
        SIGNIN,
    } = content[language]

    return (
        <header className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    src={require('./image/logo.svg').default} 
                />
            </Link>
            <div className='nav__open-wrapper'>
                <button className='nav__open' onClick={()=>setShowNav(true)}>
                    <span></span>
                </button>
            </div>
            <nav className={showNav ? "header__nav header__nav-active" : "header__nav"}>
                <button className='nav__close' onClick={()=>setShowNav(false)}>
                    <div lassName='nav__close-wrapper'></div>
                </button>
                <Link 
                    to="/nft" 
                    className={pathname === "/nft" ? "nav__item nav__item-active" : "nav__item"}
                    onClick={()=>setShowNav(false)}
                >
                    NFT
                </Link>
                <Link 
                    to="/marketplace" 
                    className={pathname === "/marketplace" ? "nav__item nav__item-active" : "nav__item"}
                    onClick={()=>setShowNav(false)}
                >
                    {Marketplace}
                </Link>
                <Link 
                    to="/roulette" 
                    className={pathname === "/roulette" ? "nav__item nav__item-active" : "nav__item"}
                    onClick={()=>setShowNav(false)}
                >
                    {Roulette}
                </Link>
                <Link 
                    to="/game" 
                    className={pathname === "/game" ? "nav__item nav__item-active" : "nav__item"}
                    onClick={()=>setShowNav(false)}
                >
                    {Game}
                </Link>
            </nav>
            <div className="header__setting">
                <img 
                    className="language__image" 
                    src={require('./image/EN.svg').default} 
                />
                <button className="header__button">
                    {SIGNIN}
                </button>
                <Link to="/profile">
                    <div className={pathname === "/profile" ? "header__user header__user-active" : "header__user"}>
                        <img 
                            className="user__image" 
                            src={require('./image/user.svg').default} 
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
