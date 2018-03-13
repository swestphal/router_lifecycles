import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../hoc/card';

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
       
        <Card>
            <Link to={{
                pathname:`${props.match.url}/posts`}}>Take me to /profile/</Link>
           
        </Card>
       
    )
}

export default Profile;