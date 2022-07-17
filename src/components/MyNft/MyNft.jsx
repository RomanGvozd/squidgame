import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nft } from './MyNft.array'

import './MyNft.scss';

function MyNft({setCardID}) {
    const language = useSelector((store) => store.language.language);

    const openPageCard = (id) => {
        window.scrollTo(0, 0);
        setCardID(id)
    }

    return(
        <main className="mynft">
            <div className="content-wrapper">
                <Link to="/profile">
                    <img 
                        className="profile__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <div className="mynft__header">
                    <h2 className="mynft__title">
                        Моя коллекция NFT
                    </h2>
                    <button className="mynft__button">
                        Обменять одинаковые карты
                    </button>
                </div>
                <div className="mynft__header">
                    <p className="mynft__text">
                        Можете обменять 100 unrare на 1 rare либо на 1 gold tiket
                    </p>
                    <p className="mynft__text">
                        Можете обменять 100 rare 1 legendary
                    </p>
                </div>
                <section className="mynft__cards">
                    {nft.map((item)=>(
                        <Link to={`/nft/page/${item.id}`} onClick={()=>openPageCard(item.id)}>
                            <div className="cards__image-wrapper">
                                <img 
                                    key={item.id}
                                    className="mynft__cards-item" 
                                    src={require(`${item.src}`)} 
                                />
                            </div>
                        </Link>
                    ))}
                </section>
                <div className="mynft__wrapper-button">
                    <button className="button-more">
                        More
                    </button>
                </div>
            </div>
        </main>
    )
}

export default MyNft