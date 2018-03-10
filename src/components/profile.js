import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    // const redir=() => {
    //     return (
    //     <Redirect to="/sdf"/> 
    //     )
    // }

    const redir =() => {
        //props.history.push('/')
        props.history.goBack();
    }
    console.log(props);
    return (
       
        <div>
            <Link to={{
                pathname:`${props.match.url}/posts`}}>Take me to /profile/</Link>
            {redir()}
        </div>
       
    )
}

export default Profile;