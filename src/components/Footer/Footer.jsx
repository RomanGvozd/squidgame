import React from 'react';
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import './Footer.scss';

function Footer() {
    const language = useSelector((store) => store.language.language);
    const { pathname } = useLocation();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className='footer'>
            <div className="content-wrapper">
                <div className="footer-wrapper">
                    <img 
                        className="footer__logo" 
                        src={require('./image/logo.svg').default} 
                    />
                    <nav className='footer__nav'>
                        <Link 
                            onClick={scrollTop}
                            to="/nft" 
                            className={pathname === "/nft" ? "nav__item nav__item-active" : "nav__item"}
                        >
                            NFT
                        </Link>
                        <Link 
                            onClick={scrollTop}
                            to="/marketplace" 
                            className={pathname === "/marketplace" ? "nav__item nav__item-active" : "nav__item"}
                        >
                            Marketplace
                        </Link>
                        <Link 
                            onClick={scrollTop}
                            to="/game" 
                            className={pathname === "/game" ? "nav__item nav__item-active" : "nav__item"}
                        >
                            Game
                        </Link>
                        <Link 
                            onClick={scrollTop}
                            to="/roulette" 
                            className={pathname === "/roulette" ? "nav__item nav__item-active" : "nav__item"}
                        >
                            Roulette
                        </Link>
                        <Link 
                            onClick={scrollTop}
                            to="/token" 
                            className={pathname === "/token" ? "nav__item nav__item-active" : "nav__item"}
                        >
                            Token
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;