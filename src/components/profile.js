import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../hoc/card';
import Auth from '../hoc/auth';

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
       <Auth>
        <Card>
            <Link to={{
                pathname:`${props.match.url}/posts`}}>Take me to /profile/</Link>
           
        </Card>
       </Auth>
    )
}

export default Profile;