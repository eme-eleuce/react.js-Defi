import React from 'react';
import './info.css';

const InfoPre = (props) => {

    return (

        <>
        <div className='icon-container'>
            {props.icon}
        </div>
        <h3>
            {props.heading}
        </h3>
        <p>
            {props.text}
        </p>

        </>
    )
}

export default InfoPre;