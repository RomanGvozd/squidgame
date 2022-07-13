import React from "react";
import { useSelector } from "react-redux";

import './ModalConverteTicket.scss';

function ModalConverteTicket({setShow}) {
    const language = useSelector((store) => store.language.language);

    return(
        <div className="modal-background">
            <div className="modal">
                <h4 className="modal__title">
                    Обмен билета на игру
                </h4>
                <div className="wrapper-block">
                    <div className="block">
                        <p className="block__title">
                            Обменять 1 золотой
                        </p>
                        <img
                            className="block__image" 
                            src={require(`./image/goldTicket.svg`).default}
                            alt=""
                        />
                    </div>
                    <div className="block">
                        <p className="block__title">
                            Обменять
                        </p>
                    </div>
                </div>
                <p className="modal__text">
                    Вы меняете 1 золотой тикет на возможность участия в серии игр. Серия игр будет в виде события. Каждая серия игр = 6 мини игр с разным временным участием
                </p>
                <button 
                    className="modal__button"
                    onClick={()=>setShow(false)}
                >
                    Пополнить баланс
                </button>
            </div>
        </div>
    )
}

export default ModalConverteTicket;