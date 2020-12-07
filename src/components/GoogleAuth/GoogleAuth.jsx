import React, { useEffect } from 'react'

const GoogleAuth = () => {

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '1035668224616-fcnh1tob5l1qh03uuaqkjcv9c7hscd78.apps.googleusercontent.com',
                scope: 'email'
            })
            console.log("success")
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default GoogleAuth
