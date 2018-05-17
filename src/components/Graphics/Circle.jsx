import React from 'react';
const Circle = (props) => {
  let radius = props.radius ? props.radius : 5;
  let fill = props.fill ? props.fill : "black";
  let stroke = props.stroke ? props.stroke : "black";
  let strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
	return(
     <circle cx={props.origin.x} cy={props.origin.y} r={radius} 
             fill={fill}  stroke={stroke} strokeWidth={strokeWidth} />
  );
}

export default Circle;
