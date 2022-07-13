import React from "react";
import { useSelector } from "react-redux";

import { nft } from './MyNft.array';

import './MarketplaceCards.scss';

function MarketplaceCards() {
    const language = useSelector((store) => store.language.language);

    return(
        <main className="marketplace-cards">
            <div className="content-wrapper">
                <h2 className="marketplace-cards__title">
                    Marketplace
                </h2>
                <section className="marketplace-cards__cards">
                    {nft.map((item)=>(
                        <img 
                            key={item.id}
                            className="cards__image" 
                            src={require(`${item.src}`)} 
                        />
                    ))}
                </section>
                <div className="marketplace-cards__block-button">
                    <button className="button">
                        More
                    </button>
                </div>
            </div>
        </main>
    )
}

export default MarketplaceCards;