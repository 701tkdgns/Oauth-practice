import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'> <Link className='title__link' to="/">제목</Link> </span>
        {user ? (
        <ul className='list'>
            <li className="listItem">
                <img src="../../assets/client-3.png" alt="" className='avatar' />
            </li>
            <li className="listItem">
                Psh
            </li>
            <li className="listItem">
                Logout
            </li>            
        </ul>
        ) : (<Link className='title__link' to="login">Login</Link>)}
    </div>
  )
}

export default Navbar