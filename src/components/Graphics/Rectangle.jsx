import React from 'react';

const Rectangle = (props) => {
  let startx = props.start.x * props.sf;
  let starty = props.start.y * props.sf;
  let endx = props.end.x * props.sf;
  let endy = props.end.y * props.sf;


	let width = endx - startx;
  let height = endy - starty;
  let stroke = props.border ? props.border : "black";
  let fill = props.fill ? props.fill : "white";
	return(
  	<rect x={startx} y={starty} width={width} height={height} stroke={stroke} fill={fill} />
  );
}

export default Rectangle;