import React from 'react'
import './SideContacts.scss'

const SideContacts = () => {
    return (
        <div class="contacts">
            <div class="contacts__item">
                <i class="fa fa-phone contacts__icon"></i>
            </div>
            <div class="contacts__item">
                <i class="fa fa-envelope contacts__icon"></i>
            </div>
            <div class="contacts__item">
                <i class="fa fa-compass contacts__icon"></i>
            </div>
        </div>
    )
}

export default SideContacts
