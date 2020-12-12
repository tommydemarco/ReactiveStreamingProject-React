import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../../components/StreamForm/StreamForm'

const CreateStream = ({ createStream }) => {

    return (
        <div>
            <StreamForm onSubmitForm={createStream} />
        </div>
    )
}

export default connect(null, { createStream })(CreateStream)