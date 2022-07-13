import React from 'react';
import { useSelector } from "react-redux";
import { aboutUs } from './AboutUs.array';

import './AboutUs.scss'

function AboutUs() {
    const language = useSelector((store) => store.language.language);

    return (
        <article className='aboutus'>
            <h4 className='aboutus__title'>
                Mass Media About Us
            </h4>
            <section className="aboutus-line" >
                {aboutUs.map((item)=>(
                    <div key={item.id} className="line__item">
                        <img 
                            key={item.id}
                            className="item-iamge" 
                            src={require(`${item.src}`)}
                            alt=""
                        />
                    </div>
                ))}
            </section>
            <div className='wrapper-button'>
                <img 
                    className="button" 
                    src={require('./image/Arrow.svg').default}
                />
                <img 
                    className="button" 
                    src={require('./image/ArrowActive.svg').default}
                />
            </div>
        </article>
    );
}

export default AboutUs;