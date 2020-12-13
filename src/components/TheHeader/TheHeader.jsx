import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import './TheHeader.scss'


const TheHeader = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    Reactive Streaming
                </Link>
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/streams/new" className="header__link">
                                Create Stream
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="/streams/list" className="header__link">
                                Streams List
                            </Link>
                        </li>
                        <li className="header__item">
                            <GoogleAuth />
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default TheHeader
