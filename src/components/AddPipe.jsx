import React from 'react';


const AddPipeButton = (props) => {

    const addPipe = () => {
        let pipeData = 
            {
                name : "P-102",
                drawMethod : "Pipe",
                props : {len : {value: 36, units: "IN"}, od: {value: 6, units: "IN"}},
                origin : {x: 10, y: 100, z: 0, units: "IN"}
                
            };

        fetch('http://localhost:3030/api/model/components', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(pipeData)
          }).then(res=>res.json())
            .then(res => console.log(res));

    }

    return(
        <button onClick={addPipe}>Add Pipe</button>
    );
}

export default AddPipeButton;

