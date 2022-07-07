import React from 'react';
import { oauth_list } from '../../config/oauth_list';
import './Login.css';


const Login = () => {
    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                        {oauth_list.map(list => (
                            <div className={`loginButton ${list.title}`}>
                            <img src={list.icon} alt="" className="icon" />
                            {list.title}
                            </div>
                        ))}
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login