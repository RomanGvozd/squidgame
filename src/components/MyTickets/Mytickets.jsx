import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import './MyTickets.scss'

function MyTickets() {
    const language = useSelector((store) => store.language.language);

    return(
        <main className="mytickets">
            <div className="content-wrapper">
                <Link to="/profile">
                    <img 
                        className="mytickets__back" 
                        src={require('./image/back.svg').default} 
                    />
                </Link>
                <h2 className="mytickets__title">
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
                                1000 <span>шт</span>
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
                                1 <span>шт</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-converter">
                    <div className="block-converter">
                        <p className="converter__text">
                            Отдаете 1000
                        </p>
                        <img
                            className="converter__image" 
                            src={require(`./image/silverTicket.svg`).default}
                            alt=""
                        />
                    </div>
                    <div className="block-converter"> 
                        <p className="converter__text">
                            Получаете 1
                        </p>
                        <img
                            className="converter__image" 
                            src={require(`./image/goldTicket.svg`).default}
                            alt=""
                        />
                    </div>
                    <button className="converter__button">
                        Обмен
                    </button>
                </div>
                <h3 className="mytickets__title2"> 
                    Описание Билетов
                </h3>
                <p className="mytickets__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                </p>
            </div>
        </main>
    )
}

export default MyTickets