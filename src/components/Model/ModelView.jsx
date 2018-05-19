import React from 'react';
import Rectangle from '../Graphics/Rectangle';
import ModelComponent from './ModelComponent';

export default class ModelView extends React.Component {
	render () {
        let componentScaleFactor = 0.125;
        let width = this.props.width;
        let height = this.props.height;

        return(
            <div style={{margin: "10px"}}>
            <svg width={width} height={height}>
                <Rectangle start={{x:0, y:0}} end={{x:width, y:height}} sf={1} border="black" fill="white" />
                {this.props.model.components.map(component => <ModelComponent key={component.id} sf={componentScaleFactor} {...component} />)}
            </svg>
            </div>
        );
	}
}
