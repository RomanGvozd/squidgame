import React, {useState} from "react";

import './ModalSell.scss';

function ModalSell({setShow}) {

    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className="modal-background">
            <div className="modal">
                <h2 className="modal__title">
                    Продать
                </h2>
                <div className="wrapper-count">
                    <img 
                        className="count__button" 
                        src={require('./image/dec.svg').default}
                        onClick={decrement}
                    />
                    <p className="count__text">
                        {count}
                    </p>
                    <img 
                        className="count__button" 
                        src={require('./image/inc.svg').default} 
                        onClick={increment}
                    />
                </div>
                <div className="block-prise">
                    <p className="prise__title">
                        Стоимость
                    </p>
                    <p className="prise__subtitle">
                        $ 3214
                    </p>
                </div>
                <button 
                    className="modal__button"
                    onClick={()=>setShow(false)}
                >
                    Продать
                </button>
            </div>
        </div>
    )
}

export default ModalSell;