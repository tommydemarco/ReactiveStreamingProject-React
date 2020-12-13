import React from 'react'
import './PageHeadings.scss'

const PageHeadings = ({ title, subtitle }) => {
    return (
        <header className="headings">
            <h1 className="headings__title">{title}</h1>
            <p className="headings__title">{subtitle}</p>
        </header>
    )
}

export default PageHeadings
