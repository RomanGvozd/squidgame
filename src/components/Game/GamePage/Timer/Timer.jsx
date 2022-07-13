import React from 'react';
import { useSelector } from "react-redux";

import './Timer.scss';

function Timer() {
    const language = useSelector((store) => store.language.language);

    return (
        <section className="timer-game">
            <h4 className="timer__title">
                Game 1
            </h4>
            <section className='timer-wrapper'>
                <div className='timer__item'>
                    <div className='item__block'>
                        <h6 className='item__title'>
                            25
                        </h6>
                    </div>
                    <p className='item__text'>
                        DAYS
                    </p>
                </div>
                <div className='timer__item'>
                    <div className='item__block'>
                        <h6 className='item__title'>
                            11
                        </h6>
                    </div>
                    <p className='item__text'>
                        HOURS
                    </p>
                </div>
                <div className='timer__item'>
                    <div className='item__block'>
                        <h6 className='item__title'>
                            52
                        </h6>
                    </div>
                    <p className='item__text'>
                        MINS
                    </p>
                </div>
                <div className='timer__item'>
                    <div className='item__block'>
                        <h6 className='item__title'>
                            35
                        </h6>
                    </div>
                    <p className='item__text'>
                        SECS
                    </p>
                </div>
            </section>
        </section>
    );
}

export default Timer;
