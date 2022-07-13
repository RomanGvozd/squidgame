import React, {useEffect, useState} from "react";
import { arr } from "./tickets.array";

import './RouletteTrack.scss';

function RouletteTrack() {
    const [firstElRef, setFirstElRef] = useState({});
    const [tickets, setTickets] = useState(arr);
    const [spine, setSpine] = useState(false);

    const maxTranslate = firstElRef.clientWidth + 20 || 0;

    const spin = () => {
        // setSpine(true)
        // if (maxTranslate !== 0) {
        //     const item = tickets[0];
        //     const arr = tickets.slice(1);
        //     setTickets([...arr, item]);
        // } 
    }

    return(
        <>
        <section className="roulette-track-wrapper">
            <div 
                className="roulette-track"
                style={spine ? { transform: `translateX(-200%)` } : {}}
            >
                <div className="roulette__active-wrapper">
                    <div className="roulette__active">
                        <img 
                            className="active__arrow-top" 
                            src={require('./image/arrowTop.svg').default} 
                        />
                        <img 
                            className="active__arrow-bottom" 
                            src={require('./image/arrowTop.svg').default} 
                        />
                    </div>
                </div>
                {tickets.map((item, index)=>(
                    <div key={item.id} className="track__item">
                        <img
                            className="converter__image" 
                            ref={index === 0 ? setFirstElRef : undefined}
                            src={require(item.type === "gold" ? "./image/goldTicket.svg" : "./image/silverTicket.svg").default}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </section>
        <section className="roulette-wrapper-button">
            <button className="button" onClick={spin}>
                Крутить рулетку
            </button>
        </section>
        </>
    )
}

export default RouletteTrack;