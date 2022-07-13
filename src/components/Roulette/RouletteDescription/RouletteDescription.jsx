import React from "react";
import { useSelector } from "react-redux";
import { historyRates } from './HistoryRates.array';

import './RouletteDescription.scss'

function RouletteDescription(params) {
    const language = useSelector((store) => store.language.language);

    return(
        <main className="roulette-description">
            <div className="content-wrapper">
                <article className="roulette-description-wrapper">
                    <section className="roulette-description-block">
                        <h2 className="roulette-description__title">
                            Описание
                        </h2>
                        <p className="roulette-description__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, vel tellus aliquet laoreet viverra nulla in. Laoreet nisi scelerisque neque, dolor diam eget. Amet, pretium pellentesque nibh sagittis. Egestas lacus vel facilisis dui.
                        </p>
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
                    </section>
                    <section className="roulette-description-block-right">
                        <h2 className="roulette-description__title">
                            История ставок
                        </h2>
                        <div className="rates-list">
                            {historyRates.map((item)=>(
                                <div 
                                    key={item.id} 
                                    className="list__item"
                                >
                                    <p className="item__text">
                                        #1
                                    </p>
                                    <img
                                        className="item__image" 
                                        src={require(item.type === "gold" ? "./image/goldTicket.svg" : "./image/silverTicket.svg").default}
                                        alt=""
                                    />
                                    <div className="item__count">
                                        x3
                                    </div>
                                    <p className="item__text">
                                        Вчера
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
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
            </div>
        </main>
    )
}

export default RouletteDescription;