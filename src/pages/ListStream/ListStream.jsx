import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import Button from '../../components/Button/Button'
import PageHeadings from '../../components/PageHeadings/PageHeadings'
import StreamsList from '../../components/StreamsList/StreamsList'


const ListStream = ({ fetchStreams, streams, currentUser, isUserSignedIn }) => {

    useEffect(() => {
        fetchStreams()
    }, [])

    return (
        <section className="page list">
            <PageHeadings title="Streams List" subtitle="Here you can fincd a list of all the streams" />
            {!streams && "loading..."}
            {streams && <StreamsList streamList={streams} currentUser={currentUser} />}
            {isUserSignedIn && <Button option="link" to="/streams/new" additionalClass="primary">Create Stream</Button> }
        </section>
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
