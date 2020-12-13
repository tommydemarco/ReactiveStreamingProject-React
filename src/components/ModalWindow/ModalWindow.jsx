import React from 'react'
import ReactDOM from 'react-dom'
import './ModalWindow.scss'

const ModalWindow = ({ title, content, children, onClickOutside}) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={onClickOutside}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("root-modal")
    )
}

export default ModalWindow
