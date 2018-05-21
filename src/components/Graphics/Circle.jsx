import React from 'react';

const TransformToView = (pt, origin, invertY, sf) => {
  let x = pt.x * sf + origin.x;
  let y = invertY ? origin.y - pt.y * sf : pt.y * sf + origin.y ;
  return ({x: x, y: y})
}

const Circle = (props) => {
  let radius = props.radius * props.sf;
  let fill = props.fill ? props.fill : "black";
  let stroke = props.stroke ? props.stroke : "black";
  let strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
  let origin = TransformToView(props.origin, props.vieworigin, props.invertyaxis, props.sf);



	return(
     <circle cx={origin.x} cy={origin.y} r={radius} 
             fill={fill}  stroke={stroke} strokeWidth={strokeWidth} />
  );
}

export default Circle;
