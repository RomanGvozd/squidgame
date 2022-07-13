import React from 'react';
import { useSelector } from "react-redux";

import "./Purschase.scss";

function Purschase() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className="purschase">
            <div className="content-wrapper">
                <section className="purschase-wrapper">
                    <div className="purschase-info">
                        <h4 className="info__title">
                            Squid Game NFT cards on the Binance platform <span>Since Q1 2022</span>
                        </h4>
                        <p className="info__text">
                            The sale of NFT SQUID GAME .cards on the secondary market of Binance NFT platform
                        </p>
                        <div className="info__wrapper-button">
                            <button className="button">
                                Purschase
                            </button>
                            <img 
                                className="binance-iamge" 
                                src={require('./image/binance.svg').default} 
                            />
                        </div>
                    </div>
                    <img 
                        className="purschase__image" 
                        src={require('./image/image.png')} 
                    />
                </section>
            </div>
        </article>
    );
}

export default Purschase;
