import React from 'react';


const UpdateButton = (props) => {

    const handleClick = () => {
        alert("Handle Click");
    }

    return(
        <button onClick={props.update}>Update</button>
    );
}

export default UpdateButton;