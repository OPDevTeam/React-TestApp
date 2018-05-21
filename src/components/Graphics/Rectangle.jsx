import React from 'react';

const TransformToView = (pt, origin, invertY, sf) => {
  let x = pt.x * sf + origin.x;
  let y = invertY ? origin.y - pt.y * sf : pt.y * sf + origin.y ;
  return ({x: x, y: y})
}

const Rectangle = (props) => {
  let start = TransformToView(props.start, props.vieworigin, props.invertyaxis, props.sf);
  let end = TransformToView(props.end, props.vieworigin, props.invertyaxis, props.sf);;


	let width = endx - startx;
  let height = endy - starty;
  let stroke = props.border ? props.border : "black";
  let fill = props.fill ? props.fill : "white";
	return(
  	<rect x={startx} y={starty} width={width} height={height} stroke={stroke} fill={fill} />
  );
}

export default Rectangle;