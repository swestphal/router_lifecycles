import React from 'react';


const UserHoc=(WrappedComponent, WrappedComponent2, arg1)=> {
    
    return (props)=> (
        
        <div>
       
            {arg1}
            {console.log("fromuserhoc")}
            <WrappedComponent {...props}/>
            <WrappedComponent2 {...props}/>
        </div>
    
    )
}

export default UserHoc;