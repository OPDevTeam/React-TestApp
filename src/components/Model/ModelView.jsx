import React from 'react';
import Rectangle from '../Graphics/Rectangle';
import ModelComponent from './ModelComponent';

export default class ModelView extends React.Component {
	render () {
        let width = this.props.width;
        let height = this.props.height

        return(
            <div style={{margin: "10px"}}>
            <h5>Model Name: {this.props.model.name}</h5>
            <h5>Model Id: {this.props.model.id}</h5>
            <svg width={width} height={height}>
                <Rectangle start={{x:0, y:0}} end={{x:width, y:height}} y2={height} border="black" fill="white" />
                {this.props.model.components.map(component => <ModelComponent {...component} />)}
            </svg>
            </div>
        );
	}
}
