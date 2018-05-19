import React from 'react';
import Line from '../Graphics/Line';
import Circle from '../Graphics/Circle';
import Rectangle from '../Graphics/Rectangle';

const ModelComponent = (props) => {

    return(
        <g>
            {props.graphics.map(graphic => {
                    switch (graphic.type) {
                        case 0:
                            return <Line key={graphic.id} {...graphic} />
                        case 1:
                            return <Circle key={graphic.id} {...graphic} />
                        case 2:
                            return <Rectangle key={graphic.id} {...graphic} />
                    } 
                })
            };
       </g>
    );
}

export default ModelComponent;
