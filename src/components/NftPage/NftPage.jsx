import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ModalSell from "./ModalSell/ModalSell";

import './NftPage.scss';

function NftPage() {
    const language = useSelector((store) => store.language.language);

    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <main className="nftpage">
            <div className="content-wrapper">
                <Link to="/nft">
                    <img 
                        className="profile__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <article className="nftpage-wrapper">
                    <aside className="nftpage__aside">
                        <div className="aside__card">
                            <img 
                                className="card__front" 
                                src={require('./image/card.png')} 
                            />
                            <div className="card__back">
                            
                            </div>
                        </div>

                        <button 
                            className="aside__button"
                            onClick={()=>setShowModal(true)}
                        >
                            Продать
                        </button>
                    </aside>
                    <section className="nftpage__info">
                        <div className="info__item">
                            <p className="item__text">
                                Есть уникальная обратная сторона у карточки. Только владелец карты видит её.
                            </p>
                        </div>
                        <div className="info__item">
                            <img 
                                className="item__image" 
                                src={require('./image/logo.svg').default} 
                            />
                        </div>
                        <div className="info__item">
                            <p className="item__title">
                                Card №067
                            </p>
                            <div className="block-cardid">
                                <p className="title">
                                    #ID list
                                </p>
                                <p className="subtitle">
                                    204300002327
                                </p>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </main>
        {showModal && <ModalSell setShow={setShowModal}/>}
        </>
    )
}

export default NftPage;