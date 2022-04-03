import React from 'react';
import './sub.css';

const Sub = () => {

    return (

        <div className='suscripcion'> 
         <div className='contenido'>
             <h2> Join Our DeFi Community</h2>
             <form action='https://getform.io/f/c2daf5b8-ff2e-4b3b-be08-3791cc1cbbb7' method='POST'>
                  <div className='form-container form-col'>
                      <input type="email" name='email' placeholder='Enter your email'/>
                      <button className="btn">Sign Up</button>
                  </div>
                  
             </form>
         </div>
        </div>
    )
}
export default Sub;