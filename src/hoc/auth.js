import React from 'react';
const Auth = (props) => {
    const pass = 'password123';

    if (pass !=='password1234') {
        return <h3>Your are not authorized</h3>
    } else  {
        return props.children   // return all what is wrapped in
    }
}
export default Auth;