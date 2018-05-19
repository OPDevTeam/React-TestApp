import React from 'react';


const AutoUpdateToggle = (props) => {

    const handleChange = () => {
        console.log("Handle Change");
    }

    return(
        <div>
            <input id="checkBox" type="checkbox" onChange={props.toggle} />
            <label>Auto-Update</label>
        </div>
    );
}

export default AutoUpdateToggle;