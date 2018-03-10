import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    console.log(props.match.params.id)
    return(
        <div>
            Post detail
        </div>

    )
}

export default PostItem;