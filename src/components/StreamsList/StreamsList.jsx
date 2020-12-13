import React from 'react'
import Button from '../Button/Button'
import './StreamsList.scss'

const renderStreams = (streamList, currentUser) => {
    return streamList.map(stream => {
        return <SingleStream key={stream.id} stream={stream} currentUser={currentUser} />
    })
}

const StreamsList = ({ streamList, currentUser }) => {
    console.log(streamList)
    return (
        <ul className="streamslist">
            {renderStreams(streamList, currentUser)}
        </ul>
    )
}

export const SingleStream = ({ stream, currentUser }) => {
    const { name, description, id, user } = stream
    const isFromUser = currentUser === user
    return (
        <li className="streamslist__item">
            <div className="streamslist__visual">
                <i className="fa fa-camera streamslist__icon"></i>
            </div>
            <div className="streamslist__description">
            <b className="streamslist__name">{name}</b>
            {description}
            </div>
            {isFromUser && <UserPermissions id={id} />}
        </li>
    )
}

export const UserPermissions = ({ id }) => {
    return (
        <div className="streamslist__permissions">
            <Button option="link" to={"/streams/edit" + id} additionalClass="primary">Edit Stream</Button>
            <Button option="link" to={"/streams/delete" + id} additionalClass="danger">Delete Stream</Button>
        </div>
    )
}

export default StreamsList
