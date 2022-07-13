import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { content } from './Header.config';

import './Header.scss';

function Header() {
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

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
            <nav className="header__nav">
                <Link 
                    to="/nft" 
                    className={pathname === "/nft" ? "nav__item nav__item-active" : "nav__item"}
                >
                    NFT
                </Link>
                <Link 
                    to="/marketplace" 
                    className={pathname === "/marketplace" ? "nav__item nav__item-active" : "nav__item"}
                >
                    {Marketplace}
                </Link>
                <Link 
                    to="/roulette" 
                    className={pathname === "/roulette" ? "nav__item nav__item-active" : "nav__item"}
                >
                    {Roulette}
                </Link>
                <Link 
                    to="/game" 
                    className={pathname === "/game" ? "nav__item nav__item-active" : "nav__item"}
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
