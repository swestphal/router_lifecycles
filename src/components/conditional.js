import React from 'react';

const Conditional = () => {
    const value=true;
    const returnValue = () => {
        return true;
    }
    const showIt = () => {
        return (
            returnValue() ?

            <div>Its true</div>
            :
            null
        )
    }

    return (
        <div>   
            {
                // value ? '<div>Its true</div>':null
                showIt()
            
            }
        </div>
    )
}

export default Conditional;