import React, { useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import PageHeadings from '../../components/PageHeadings/PageHeadings'
import StreamForm from '../../components/StreamForm/StreamForm'

const EditStream = ({ fetchStream, editStream, streams, match}) => {

    let stream 
    if (streams) {
        stream = streams[match.params.id]
    }

    const fetchStreamMemo = useCallback(() => fetchStream(match.params.id), [])
 
    useEffect(() => {
        fetchStreamMemo()
    }, [fetchStreamMemo])

    const editStreamValues = (formValues, history) => {
        editStream(match.params.id, formValues, history)
    }

    return (
        <div className="page edit">
            <PageHeadings title="Edit Stream" subtitle="Here you can edit a stream that you previously created" />
            {
                stream && 
                <StreamForm 
                    initialValues={{ 'name': stream.name, 'description': stream.description}}
                    id={stream.id}
                    onSubmitForm={editStreamValues}
                />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(fetchStream(id)),
        editStream: (id, formValues, history) => dispatch(editStream(id, formValues, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditStream))
