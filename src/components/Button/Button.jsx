import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({option = 'button', functionOnClick, type = 'button', additionalClass = '', to = "/", children}) => {

    

    const classes = styles.button + ' ' + additionalClass

    if(option === 'button') {
        return (
            <button type={type} className={classes} onClick={functionOnClick}>
                {children}
            </button>
        )
    } else {
        return (
            <Link className={classes} to={to}>
                {children}
            </Link>
        )
    }
    
}

export default Button
