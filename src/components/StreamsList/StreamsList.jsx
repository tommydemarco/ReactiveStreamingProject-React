import React from 'react'
import Button from '../Button/Button'
import './StreamsList.scss'

const renderStreams = (streamList, currentUser, setModal) => {
    return streamList.map(stream => {
        return <SingleStream key={stream.id} stream={stream} currentUser={currentUser} setModal={setModal} />
    })
}

const StreamsList = ({ streamList, currentUser, setModal }) => {
    console.log(streamList)
    return (
        <ul className="streamslist">
            {renderStreams(streamList, currentUser, setModal)}
        </ul>
    )
}

export const SingleStream = ({ stream, currentUser, setModal }) => {
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
            {isFromUser && <UserPermissions id={id} setModal={setModal} />}
        </li>
    )
}

export const UserPermissions = ({ id, setModal }) => {
    return (
        <div className="streamslist__permissions">
            <Button option="link" to={"/streams/edit/" + id} additionalClass="primary">Edit Stream</Button>
            <Button type="button" functionOnClick={() => {
                setModal({ show: true, id: id })
            }
            } additionalClass="danger">Delete Stream</Button>
        </div>
    )
}

export default StreamsList
