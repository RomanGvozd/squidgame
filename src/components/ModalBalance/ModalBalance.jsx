import React, {useState} from 'react'
import { useSelector } from "react-redux";

import Select from "./Select/Select";

import './ModalBalance.scss';

function ModalBalance({setShow}) {
    const language = useSelector((store) => store.language.language);

    const [selected, setSelected] = useState("Everscale");
    const options = ["Everscale",];

    return(
        <div className="modal-background">
            <div className="modal">
                <h4 className="modal__title">
                    Пополнить баланс
                </h4>
                <div className="block-address">
                    <p className="address__title">
                        Адресс пополнения:
                    </p>
                    <p className="address__subtitle">
                        0:1aede8338285bc...
                    </p>
                </div>
                <Select 
                    selected={selected}
                    setSelected={setSelected}
                    options={options}
                />
                <div className="block-address">
                    <p className="address__title">
                        Комментарий:
                    </p>
                    <p className="address__subtitle">
                        #837u12734712476
                    </p>
                </div>
                <p className="modal__text">
                    Отправляйте только крипту кошелька на указанный адрес пересылайте только ever. если вы отправите что-то другое, то скорее всего средства будут потеряны. не делайте так
                </p>
                <p className="modal__text">
                    Коментарий обязателен! депозит без указания комментария не будет зачислен
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

export default ModalBalance;