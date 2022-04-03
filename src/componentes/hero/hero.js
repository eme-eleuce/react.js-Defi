import React from 'react';
import VideoPrincipal from '../../cosas/video.mp4';
import './hero.css';


const Hero = () => {

    return (

        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={VideoPrincipal} type='video/mp4' />
            </video>
            <div className="hero-text">
                 <h1>
                     Decentralized
                 </h1>
                 <h1><span className='green'> Trading </span> Protocol </h1>
                 <p>Guaranteed liquidity trading for millions of users and top ETH applications.</p>
                 <div className="btn-goup">
                     <button className='btn'> DeFi</button>
                     <button className='btn btn-outline'> Roadmap </button>
                     <button className='btn'> FAQ</button>

                 </div>
             </div>
            <div className='bottom-text'>
                <h2>Total Volume secured: 50,649,930.02 $</h2>
            </div>
        </div>
    )

}

export default Hero;