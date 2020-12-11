import React from 'react'
import styles from './Button.module.scss'

const Button = ({functionOnClick, type = 'button', additionalClass = '', children}) => {

    

    const classes = styles.button + ' ' + additionalClass
    return (
        <button type={type} className={classes} onClick={functionOnClick}>
            {children}
        </button>
    )
}

export default Button
