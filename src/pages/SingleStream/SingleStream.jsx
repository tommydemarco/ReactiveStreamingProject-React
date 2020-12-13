import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchStreams } from '../../actions/index'
import PageHeadings from '../../components/PageHeadings/PageHeadings'
import './SingleStream.scss'

const SingleStream = ({ streams, fetchStreams }) => {

    const { id } = useParams()

    useEffect(() => {
        fetchStreams() 
    }, [])

    if(!streams[id]) {
        return "Loading"
    } 
    const stream = streams[id]
    console.log(stream)

    return (
        <section className="page single">
            <PageHeadings title={stream.name} subtitle={stream.description} />
        </section>
    )
}

const mapStateToProps = state => {
    return {
        streams: state.streams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStreams: () => dispatch(fetchStreams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStream)
