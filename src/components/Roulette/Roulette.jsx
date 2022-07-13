import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import RouletteTrack from "./RouletteTrack/RouletteTrack";
import RouletteDescription from "./RouletteDescription/RouletteDescription";

import './Roulette.scss';

function Roulette() {
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
        <main className="roulette">
            <div className="content-wrapper">
                <Link to="/">
                    <img 
                        className="roulette__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <section className="roulette__section">
                    <div>
                        <p className="roulette__title">
                            Баланс
                        </p>
                        <p className="roulette__subtitle">
                            $ 7661263
                        </p>
                    </div>
                    <div className="roulette__wrapper-button">
                        <button className="button">
                            Пополнить баланс
                        </button>
                        <button className="button">
                            Крутить рулетку
                        </button>
                    </div>
                </section>
                <section className="roulette__section">
                    <button className="button">
                        x1
                    </button>
                    <button className="button">
                        x2
                    </button>
                    <button className="button">
                        x5
                    </button>
                    <button className="button">
                        x10
                    </button>
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
                </section>
                <p className="roulette__text">
                    Стоимость 1 прокрутки равен 1 $
                </p>
            </div>
        </main>
        <RouletteTrack />
        <RouletteDescription />
        </>
    )
}

export default Roulette;