import React, { useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const EditStream = ({ fetchStream, stream, match}) => {

    const fetchStreamMemo = useCallback(() => fetchStream(match.params.id), [])

    useEffect(() => {
        fetchStreamMemo()
    }, [fetchStreamMemo])

    return (
        <div className="page">
            {
                stream && <div>{stream.description}</div>
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(props)
    return {
        stream: state.streams[props]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(fetchStream(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditStream))
