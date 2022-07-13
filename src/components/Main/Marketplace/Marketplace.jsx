import React from 'react';
import { useSelector } from "react-redux";

import './Marketplace.scss';

function Marketplace() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className='marketplace'>
            <div className="content-wrapper">
                <section className='marketplace-wrapper'>
                    <div className='marketplace__block'>
                        <h2 className='marketplace__title'>
                            Marketplace
                        </h2>
                        <p className='marketplace__text'>
                            In the process of Implementation functionality of the internal market, where you will be able sell NFT tokens & purchase those sold by other users
                        </p>
                        <div className='marketplace__image'>

                        </div>
                    </div>
                    <div className='marketplace__block block-right'>
                        <div className='line'></div>
                        <p className='marketplace__text'>
                            Buy, sell, collect! Impressive deals - SQUID GAME cards
                        </p>
                        <div className='line'></div>
                        <p className='marketplace__text'>
                            Buy, sell, collect! Impressive deals - SQUID GAME cards
                        </p>
                        <div className='line'></div>
                        <p className='marketplace__text'>
                            Create an internal wallet directly on the site, as well as your own collection showcase
                        </p>
                        <div className='line'></div>
                        <p className='marketplace__text'>
                            Create collections of cards and get exclusive NTF from the platform
                        </p>
                        <div className='line'></div>
                        <p className='marketplace__text'>
                            Create collections of cards and get exclusive NTF from the platform
                        </p>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default Marketplace;
