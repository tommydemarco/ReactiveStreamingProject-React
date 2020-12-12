import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from '../GoogleAuth/GoogleAuth'


const TheHeader = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    Reactive Streaming
                </Link>
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/streams/new">
                                Create Stream
                            </Link>
                            <Link to="/streams/list">
                                Streams List
                            </Link>
                        </li>
                        <li>
                            <GoogleAuth />
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}

export default TheHeader
