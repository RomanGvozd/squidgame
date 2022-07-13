import React, {useState} from 'react'

import './Select.scss';

const Select = ({selected, setSelected, options}) => {

    const [isActive, setIsActive] = useState(false);

    return(
        <div className='select'>
            <div 
                className={isActive ? 'select__button select__button-active' : 'select__button'}
                onClick={() => setIsActive(!isActive)}
            >
                {selected}
                <div 
                    className='selectArrow'
                    style={isActive ? {transform: `rotate(180deg)`} : {transform: `rotate(0deg)`}}
                >    
                </div>
            </div>
            {isActive && (
                <div className='select__content'>
                    {options.map(option => (
                        <div 
                        className='content__item'
                        onClick={
                            () => {
                                setIsActive(false)
                                setSelected(option)
                            }
                        }
                        >
                        {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Select;