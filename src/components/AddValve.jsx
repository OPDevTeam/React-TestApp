import React from 'react';


export class AddGateValveForm  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tag: "V-100",
            drawMethod: "GateValve",
            x: 10,
            y: 10,
            len: 10,
            od: 10
        }
    }

    handleTagChanged = (event) => {
        this.setState({tag: event.target.value});
    }

    handleXChanged = (event) => {
        this.setState({x: Number(event.target.value)});
    }

    handleYChanged = (event) => {
        this.setState({y: Number(event.target.value)});
    }

     handleLenChanged = (event) => {
        this.setState({len: Number(event.target.value)});
    }

    handleODChanged = (event) => {
        this.setState({od: Number(event.target.value)});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let pipeData = 
            {
                name : this.state.tag,
                drawMethod : this.state.drawMethod,
                props : {len : {value: this.state.len, units: "IN"}, od: {value: this.state.od, units: "IN"}},
                origin : {x: this.state.x, y: this.state.y, z: 0, units: "IN"}
                
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

    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
                <label>
                    tag:
                    <input type="text" name="tag" value={this.state.tag} onChange={this.handleTagChanged} />
                </label>
                <label>
                    x:
                    <input type="number" name="x" value={this.state.x} onChange={this.handleXChanged} />
                </label>
                <label>
                    y:
                    <input type="number" name="y"  value={this.state.y} onChange={this.handleYChanged} />
                </label>
                <label>
                    length:
                    <input type="number" name="len" value={this.state.len}  onChange={this.handleLenChanged} />
                </label>
                <label>
                    od:
                    <input type="number" name="od" value={this.state.od}  onChange={this.handleODChanged} />
                </label>
                <input type="submit" value="Add Gate Valve" />
            </form>
        );
    }

}



