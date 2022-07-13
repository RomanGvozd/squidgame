import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cards } from './cards.array';

import Timer from '../Main/Timer/Timer';
import ModalBalance from '../ModalBalance/ModalBalance';
import ModalConverteTicket from '../ModalConverteTicket/ModalConverteTicket';

import './Profile.scss';

function Profile() {
    const language = useSelector((store) => store.language.language);

    const [count, setCount] = useState(0)
    const [showModalBalance, setShowModalBalance] = useState(false)
    const [showModalConverteTicket, setShowModalConverteTicket] = useState(false)

    const handleLeft = () => {
        if (count < 0) { 
            setCount(count + 19.31) 
        }
    }

    let widht = (cards.length - 3) * 19.31

    const handleRight = () => {
        console.log('widht ' + widht)
        if (Math.abs(count) <= widht) {
            setCount(count - 19.31)
        }
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
        <main className="profile">
            <div className="content-wrapper">
                <Link to="/">
                    <img 
                        className="profile__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <article className="profile-wrapper">
                    <aside className="profile__info">
                        <img 
                            className="info__logo" 
                            src={require('./image/logo.svg').default} 
                        />
                        <p className="info__tag">
                            #837u12734712476
                        </p>
                        <p className="info__balance">
                            $ 7661263
                        </p>
                        <nav className="info__nav">
                            <button 
                                className="nav__button"
                                onClick={()=>setShowModalBalance(true)}
                            >
                                Пополнить баланс
                            </button>
                            <Link to="/nft" onClick={scrollTop}>
                            <button className="nav__button">
                                Мои NFT
                            </button>
                            </Link>
                            <Link to="/tickets" onClick={scrollTop}>
                                <button className="nav__button">
                                    Мои тикеты
                                </button>
                            </Link>
                            <Link to="/roulette" onClick={scrollTop}>
                            <button className="nav__button">
                                Крутить рулетку
                            </button>
                            </Link>
                        </nav>
                    </aside>
                    <section className="profil__cards">
                        <div className='cards__header'>
                            <h2 className='header__title'>
                                Моя коллекция NFT
                            </h2>
                            <div className='wrapper-button'>
                                <img 
                                    onClick={handleLeft}
                                    className={count < 0 ? "button button-reverse" : "button" }
                                    src={require(count < 0 ? './image/ArrowActive.svg' : './image/Arrow.svg').default}
                                />
                                <img 
                                    onClick={handleRight}
                                    className={Math.abs(count) <= widht ? "button" : "button button-reverse" }
                                    src={require(Math.abs(count) <= widht ? './image/ArrowActive.svg' : './image/Arrow.svg').default}
                                />
                            </div>
                        </div>
                        <div className='cards'>
                            <div 
                            className='cards__line'
                            style={{transform: `translateX(${count}rem)`}}
                            >
                                {cards.map((item)=>(
                                    <img
                                        key={item.id}
                                        className="card" 
                                        src={require(`${item.src}`)}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </div>
                        <h2 className='profile__title'>
                            Мои тикеты
                        </h2>
                        <div className='tickets'>
                            <div className='ticket'>
                                <img
                                    className="ticket__image" 
                                    src={require(`./image/silverTicket.svg`).default}
                                    alt=""
                                />
                                <div className='tiket__info'>
                                    <p className='info__title'>
                                        Мои Серебряные Билеты
                                    </p>
                                    <p className='info__subtitle'>
                                        1000 шт
                                    </p>
                                </div>
                            </div>
                            <div className='ticket'>
                                <img
                                    className="ticket__image" 
                                    src={require(`./image/goldTicket.svg`).default}
                                    alt=""
                                />
                                <div className='tiket__info'>
                                    <p className='info__title'>
                                        Мои Золотые Билеты
                                    </p>
                                    <p className='info__subtitle'>
                                        1 шт
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </main>
        <Timer />
        <div className='wrapper-ticket-button'>
            <button 
                className='button'
                onClick={()=>setShowModalConverteTicket(true)}
            >
                Обменять билет на игру
            </button>
        </div>
        {showModalBalance && <ModalBalance setShow={setShowModalBalance}/>}
        {showModalConverteTicket && <ModalConverteTicket setShow={setShowModalConverteTicket}/>}
        </>
    );
}

export default Profile;
