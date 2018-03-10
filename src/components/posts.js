import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
           <Link to="/post/1">Post1</Link>
            <Link to="/post/2">Post2</Link><br/>
            <Link to="/post/3">Post3</Link><br/>
        </div>
    )
}

export default Posts;