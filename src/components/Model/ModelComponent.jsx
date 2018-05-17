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
                            return <Line {...graphic} />
                        case 1:
                            return <Circle {...graphic} />
                        case 2:
                            return <Rectangle {...graphic} />
                    } 
                })
            };
       </g>
    );
}

export default ModelComponent;
