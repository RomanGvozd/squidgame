import React from 'react';
import { useSelector } from "react-redux";
import { cards } from './cards.array';

import './OurCards.scss';

function OurCards() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className='ourcards'>
            <div className="content-wrapper">
                <section className="figures">
                    <img 
                        className="figures__item"
                        src={require('./image/ellipse.svg').default} 
                    />
                    <img 
                        className="figures__item"
                        src={require('./image/triangle.svg').default} 
                    />
                    <img 
                        className="figures__item"
                        src={require('./image/square.svg').default} 
                    />
                </section>
                <h2 className='ourcards__title'>
                    Our Cards
                </h2>
                <div className='button-wrapper'>
                    <p className='ourcards__text'>
                        NFT digital virtual trading cards and digital cards with game elements, designed especially for SQUID GAME cards
                    </p>
                    <button className='ourcards__button'>
                        Avaliable Cards
                    </button>
                </div>
                <section className='cards'>
                    <div className='cards-line'>
                        {cards.map((item)=>(
                            <img
                                key={item.id}
                                className="cards__item" 
                                src={require(`${item.src}`)}
                                alt=""
                            />
                        ))}
                    </div>
                </section>
                <div className='wrapper-button'>
                    <img 
                        className="button" 
                        src={require('./image/Arrow.svg').default}
                    />
                    <img 
                        className="button" 
                        src={require('./image/ArrowActive.svg').default}
                    />
                </div>
            </div>
        </article>
    );
}

export default OurCards;