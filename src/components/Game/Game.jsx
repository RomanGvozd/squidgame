import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import GamePage from "./GamePage/GamePage";

import './Game.scss';

function Game() {
    const language = useSelector((store) => store.language.language);

    return(
        <>
        <main className="game">
            <div className="content-wrapper">
                <Link to="/">
                    <img 
                        className="marketplace__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <article className="game-wrapper">
                    <img 
                        className="game__logo" 
                        src={require('./image/logo.svg').default} 
                    />
                    <section className="game__info">
                        <p className="info__text">
                            Общее количество участников:
                        </p>                       
                        <p className="info__count">
                            456 <span className="info__text">SD</span>
                        </p>
                        <p className="info__text">
                            Общий игровой приз:
                        </p>
                        <p className="info__count">
                            45,600,000,000
                        </p>
                    </section>
                </article>
            </div>
        </main>
        <GamePage />
        </>
    )
}

export default Game;