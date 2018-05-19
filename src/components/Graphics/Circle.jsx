import React from 'react';

const Circle = (props) => {
  let radius = props.radius * props.sf;
  let fill = props.fill ? props.fill : "black";
  let stroke = props.stroke ? props.stroke : "black";
  let strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
  let originx = props.origin.x * props.sf;
  let originy = props.origin.y * props.sf;



	return(
     <circle cx={originx} cy={originy} r={radius} 
             fill={fill}  stroke={stroke} strokeWidth={strokeWidth} />
  );
}

export default Circle;
