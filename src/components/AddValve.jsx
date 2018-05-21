import React from 'react';


const AddValveButton = (props) => {

    const addValve = () => {
        let data = 
        {
            name : "V-103",
            drawMethod : "BallValve",
            props : {len : {value: 15, units: "IN"}, od: {value: 6, units: "IN"}, ballRadius: {value: 2, units: "IN"}},
            origin : {x: 46, y: 100, z: 0, units: "IN"}
            }
        fetch('http://localhost:3030/api/model/components', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res=>res.json())
            .then(res => console.log(res));

    }

    return(
        <button onClick={addValve}>Add Pipe</button>
    );
}

export default AddValveButton;

