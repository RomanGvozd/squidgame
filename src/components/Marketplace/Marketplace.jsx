import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MarketplaceCards from "./MarketplaceCards/MarketplaceCards";

import './Marketplace.scss';

function Marketplace() {
    const language = useSelector((store) => store.language.language);
    
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <>
        <main className="marketplace">
            <div className="content-wrapper">
                <Link to="/">
                    <img 
                        className="marketplace__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <article className="marketplace-wrapper">
                    <section className="marketplace__image">
                        <div className="image__background">
                            <div className="image__header">

                            </div>
                            <img 
                                className="image" 
                                src={require('./image/box.png')} 
                            />
                        </div>
                    </section>
                    <section className="marketplace__info">
                        <h2 className="info__title">
                            Моя коллекция NFT
                        </h2>
                        <p className="info__text">
                            Есть уникальная обратная сторона у карточки. Только владелец карты видит её.
                            Есть уникальная обратная сторона у карточки. Только владелец карты видит её.
                            Есть уникальная обратная сторона у карточки. Только владелец карты видит её.
                        </p>
                        <h4 className="info__title-prise">
                            <span>$</span> 50
                        </h4>
                        <div className="wrapper-button">
                            <div className="wrapper-count">
                                <img 
                                    className="count__button" 
                                    src={require('./image/dec.svg').default}
                                    onClick={decrement}
                                />
                                <p className="count__text">
                                    {count}
                                </p>
                                <img 
                                    className="count__button" 
                                    src={require('./image/inc.svg').default} 
                                    onClick={increment}
                                />
                            </div>
                            <button className="button">
                                Buy Now
                            </button>
                        </div>
                    </section>
                </article>
            </div>
        </main>
        <MarketplaceCards />
        </>
    )
}

export default Marketplace;