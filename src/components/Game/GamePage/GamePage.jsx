import React from "react";
import { useSelector } from "react-redux";

import Timer from './Timer/Timer'

import './GamePage.scss';

function GamePage() {
    const language = useSelector((store) => store.language.language);

    return(
        <main className="game-page">
            <div className="content-wrapper">
                <Timer />
                <img 
                    className="game__play" 
                    src={require('./image/game.png')} 
                />
            </div>
        </main>
    )
}

export default GamePage;