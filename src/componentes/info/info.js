import React from 'react';
import './info.css';
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';
import InfoPre from './InfoPre';

const Info = () => {

    return (

        <div className='info'>
          <div className="container">
              <h2> A Growing Protocol Ecosystem </h2>
              <p> The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all. </p>
           <div className="card-container">
               <div className="card">
                   <InfoPre icon={<SiHiveBlockchain className='icon'/>} heading='Reliable, tamper-proof' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'/>
               </div>
               <div className="card">
                   <InfoPre icon={<SiStrapi className='icon' />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
               </div> 
               <div className="card">
                   <InfoPre icon={<SiFsecure className='icon' />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'/>
               </div> 
               <div className="card">
                   <InfoPre icon={<VscServerProcess className='icon' />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'/>
               </div> 
           </div>
           
          </div>
        </div>
    )
}

export default Info;