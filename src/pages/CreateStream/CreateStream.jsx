import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../../components/StreamForm/StreamForm'
import PageHeadings from '../../components/PageHeadings/PageHeadings'

const CreateStream = ({ createStream }) => {

    return (
        <section className="page create">
             <PageHeadings title="Create Stream" subtitle="Here you can see a list of all streams" />
            <StreamForm onSubmitForm={createStream} />
        </section>
    )
}

export default connect(null, { createStream })(CreateStream)