import React from 'react';
import { useSelector } from "react-redux";

import './Description.scss';

function Description() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className="main">
            <div className="content-wrapper">
                <section className='wrapper-title'>
                    <h1 className="main__title">
                        <span>Exclusive</span> SquidGame NFG Card
                    </h1>
                    <img 
                        className="main__play" 
                        src={require('./image/play.svg').default} 
                    />
                </section>
                <h6 className="main__subtitle">
                    from the Official SQUID GAME Licensee
                </h6>
                <p className="main__text">
                    Blockchain Gaming and Utility Tokens*! Even more realistic handling of virtual cards. Build collections, create teams, stack, win and get exclusive prizes and awards from the SQUID GAME
                </p>
                <div className='main__button-wrapper'>
                    <button className='button'>
                        Purschase
                    </button>
                    <button className='button'>
                        Join Telegram
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Description;