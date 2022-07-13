import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { arr } from './RoadMap.array';
import { tockens } from './tockens.array';

import './RoadMap.scss';

function RoadMap() {
    const language = useSelector((store) => store.language.language);

    const [roadmap , setRoadmap] = useState(arr)

    const handleCheked = (itemid, listItemid) => {
        setRoadmap(roadmap.map(item => {
            if (item.id === itemid) {
                item.list.map(listItem => {
                    if (listItem.id === listItemid) {
                        listItem.checked = !listItem.checked
                    }
                    return listItem
                })
            }
            return item
        }))
    }

    return (
        <article className="roadmap">
            <div className="content-wrapper">
                <section className="roadmap-wrapper">
                    <div className='roadmap__block-left'>
                        <h2 className="roadmap__title">
                            RoadMap
                        </h2>
                        {roadmap.map((item)=>(
                            <div key={item.id} className='item-wrapper'>
                                <p className='item__title'>
                                    {item.title}
                                </p>
                                {item.list.map((listItem)=>(
                                    <div 
                                        key={listItem.id} 
                                        className='listItem-wrapper' 
                                        onClick={()=>handleCheked(item.id, listItem.id)}
                                    >
                                        <div className={listItem.checked ? 'listItem-checkbox-active' : 'listItem-checkbox'}>
                                            {listItem.checked 
                                            ?<img 
                                                className="checkbox__iamge" 
                                                src={require('./image/checked.svg').default} 
                                            />
                                            : <></>
                                            }
                                        </div>
                                        <p className='listItem__title'>
                                            {listItem.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                    <div className='roadmap__block-right'>
                        <div className="roadmap__wrapper-title">
                            <h2 className="roadmap__title">
                                Token*
                            </h2>
                            <p className="roadmap__text">
                                Buy and win Platform Utility Tokens* <span>SQUAD GAME token</span> via:
                            </p>
                        </div>
                        <ul className='list'>
                            <li className='list__item'>
                                <img 
                                    className="item__iamge" 
                                    src={require('./image/ellipse.svg').default} 
                                />
                                <p className='item__text'>
                                    Staking Cards
                                </p>
                            </li>
                            <li className='list__item'>
                                <img 
                                    className="item__iamge" 
                                    src={require('./image/triangle.svg').default} 
                                />
                                <p className='item__text'>
                                    Activity In The Project
                                </p>
                            </li>
                            <li className='list__item'>
                                <img 
                                    className="item__iamge" 
                                    src={require('./image/square.svg').default} 
                                />
                                <p className='item__text'>
                                    Game Mechanics
                                </p>
                            </li>
                        </ul>
                        <h4 className="roadmap__subtitle">
                            Exclusive <span>bonus</span> options only for Utility Tokens* in Our *<span>Fan Store</span>
                        </h4>
                        <div className='token__list'>
                            {tockens.map((item)=>(
                                <div key={item.id} className='token__item'>
                                    <p className='token__text'>
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default RoadMap;