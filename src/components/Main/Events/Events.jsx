import React from 'react';
import { useSelector } from "react-redux";
import { events } from './events.array';

import './Events.scss';

function Events() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className="events">
            <div className="content-wrapper">
                <section className="events-wrapper">
                    <div className="events-block">
                        <h4 className="events__title">
                            Our Events Calendar 
                        </h4>
                        {events.map((item)=>(
                            <div key={item.id}>
                                <p className='event__date'>
                                    {item.date}
                                </p>
                                <h6 className='event__title'>
                                    {item.title}
                                </h6>
                                <p className='event__text'>
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                    <div className="events-block block-left">
                        <h4 className="events__title">
                            Our platform 
                        </h4>
                        <p className='event__text'>
                            The platform is built on blockchain and is the safest and most reliable format for the high-tech market, which is ahead of its time in many ways
                        </p> 

                        <h4 className="blockchain__title">
                            Cards are available on blockchains:
                        </h4>
                        <div className="blockchain__item">
                            <img 
                                className="item-iamge" 
                                src={require('./image/binance.svg').default} 
                            />
                        </div>
                        <div className="blockchain__item">
                            <img 
                                className="item-iamge" 
                                src={require('./image/everscale.svg').default} 
                            />
                        </div>
                        <div className="blockchain__item">
                            <img 
                                className="item-iamge" 
                                src={require('./image/ethereum.svg').default} 
                            />
                        </div>
                    </div>

                </section>
            </div>
        </article>
    );
}

export default Events;