import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchStreams, deleteStream } from '../../actions'
import Button from '../../components/Button/Button'
import PageHeadings from '../../components/PageHeadings/PageHeadings'
import StreamsList from '../../components/StreamsList/StreamsList'
import ModalWindow from '../../components/ModalWindow/ModalWindow'


const ListStream = ({ fetchStreams, deleteStream, streams, currentUser, isUserSignedIn }) => {

    const [ deleteModal, setDeleteModal] = useState({ show: false, id: null})

    useEffect(() => {
        fetchStreams()
    }, [])

    return (
        <>
        <section className="page list">
            <PageHeadings title="Streams List" subtitle="Here you can fincd a list of all the streams" />
            {!streams && "loading..."}
            {streams && <StreamsList streamList={streams} currentUser={currentUser} setModal={setDeleteModal} />}
            {isUserSignedIn && <Button option="link" to="/streams/new" additionalClass="primary">Create Stream</Button> }
        </section>
        {deleteModal.show && 
        <ModalWindow 
            title="Delete Stream" 
            content="Are you sure you want to delete the stream?"
            onClickOutside={() => setDeleteModal({ show: false, id:null})}
        >
            <Button additionalClass="danger" functionOnClick={() => {
                deleteStream(deleteModal.id)
                setDeleteModal({show:false, id:null})
            }}>
                Delete
            </Button>
            <Button additionalClass="primary" functionOnClick={() => setDeleteModal({show: false, id: null})}>
                Cancel
            </Button>
        </ModalWindow>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.userId,
        streams: Object.values(state.streams),
        isUserSignedIn: state.auth.isSignedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStreams: () => dispatch(fetchStreams()),
        deleteStream: (id) => dispatch(deleteStream(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListStream) 
