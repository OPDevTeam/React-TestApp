import React from 'react';
import Rectangle from '../Graphics/Rectangle';
import ModelComponent from './ModelComponent';

export default class ModelView extends React.Component {
	render () {
        let componentScaleFactor = 0.1;
        let width = this.props.width;
        let height = this.props.height;
        let viewOrigin = {x: width*0.5, y: height*0.5};
        let invertYAxis = true;

        return(
            <div style={{margin: "10px"}}>
                <svg width={width} height={height}>
                    <rect x={0} y={0} width={width} height={height} stroke="black" fill="white" />
                    {this.props.model.components.map(component => 
                    <ModelComponent key={component.id} sf={componentScaleFactor} vieworigin={viewOrigin} invertyaxis={invertYAxis} 
                                    {...component} />)}
                </svg>
            </div>
        );
	}
}
