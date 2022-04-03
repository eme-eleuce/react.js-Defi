import React, {useState} from "react";
import {BiListUl} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai'
import './navbar.css';


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {

        setClick(!click)
    }
    return (
        
            <div className='navbar'>
                <div className="container">
                    <h1 style={{ marginLeft: '1rem', color: '#00e600'}} >DeFi</h1>
                    <ul className={click ? 'nav active' : 'nav'}>
                        <li className="nav-item">
                            <a href="/">Platform</a>
                        </li>
                        <li className="nav-item">
                            <a href="/">Developers</a>
                        </li>
                        <li className="nav-item">
                            <a href="/">Community</a>
                        </li>
                        <li className="nav-item">
                            <a href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className='btn' href="/">Use Defi</a>
                        </li>
                    </ul>
                    <div onClick={handleClick} className="lista">
                        {click ? (<AiOutlineClose className= "icon"/>) : <BiListUl className="icon"/>}
                    </div>
           </div>
        </div>
    )
}

export default Navbar;