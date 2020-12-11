import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'
import Button from '../Button/Button'

const GoogleAuth = ({ isUserSignedIn, signIn, signOut }) => {

    const [ authentication, setAuthentication ] = useState(null)
    const [ debouncerAuth, setDebouncerAuth ] = useState(null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '1035668224616-fcnh1tob5l1qh03uuaqkjcv9c7hscd78.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                if(!authentication) {
                    setAuthentication(window.gapi.auth2.getAuthInstance())
                } else {
                    authentication.isSignedIn.listen((isSignedIn) => {
                        setDebouncerAuth(isSignedIn)
                    });
                }
            })  
            console.log("Main useEffect called")        
        })
    }, [authentication, setAuthentication])

    useEffect(() => {
        if(debouncerAuth === null) {
            return
        }
        if (debouncerAuth) {
            signIn();
        } else {
            signOut();
        }
        console.log("Secondary unseEffect called")  
    }, [debouncerAuth, signIn, signOut])

    const renderButton = () => {
        if(isUserSignedIn) {
            return <Button functionOnClick={() => authentication.signOut()}>Sign out</Button>
        } else {
            return <Button functionOnClick={() => authentication.signIn()}>Sign in</Button>
        }
    }
    return (
        <>
            {renderButton()}
        </>
    )
}

const mapStateToProps = state => {
    return { isUserSignedIn: state.auth.isSignedIn } 
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
