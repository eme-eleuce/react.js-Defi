import React from 'react';
import './dev.css';
import Terminal from '../../cosas/terminal.png';

const Dev = () => {

    return (

        <div className='developer'>
           <div className='container'>
             <div className="left">
                 <h2>Superpowers for DeFi developers.</h2>
                 <p>Checkout the <span className='green'>documentation</span>, the <span className="green">quick start </span> or a guide below to integrate your projects with thousands of tokens and billions in liquidity.</p>
             </div>
             <div className="right">
                 <div className="img-container">
                     <img src={Terminal} alt='' />
                 </div>
             </div>
           </div>
        </div>
    )
}

export default Dev;