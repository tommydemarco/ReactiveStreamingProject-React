import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

const renderStreams = (streamsList, currentUser) => {
    return streamsList.map(stream => {
        return <li key={stream.id}>
            <b>{stream.name}</b> <br/>
            {stream.description} <br/>
            {stream.userId}
            {renderUserPermissions(currentUser, stream.user, stream.id)}
        </li>
    })
}

const renderUserPermissions = (id, streamUserId, idOfStream) => {
    console.log("CURRENT USER IN THE FUNCTION", id)
    console.log(streamUserId)
    if (id === streamUserId) {
        return <div>
            <Link to={"/streams/edit/" + idOfStream}>Edit</Link>
            <Link>Delete</Link>
        </div>
    }
}

const ListStream = ({ fetchStreams, streams, currentUser, isUserSignedIn }) => {

    useEffect(() => {
        fetchStreams()
    }, [])

    return (
        <div>
            {!streams && "loading..."}
            {streams && <ul>
                {renderStreams(streams, currentUser)}
            </ul>}
            {isUserSignedIn && <Link>Create Stream</Link> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.userId,
        streams: Object.values(state.streams),
        isUserSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, {fetchStreams})(ListStream) 
