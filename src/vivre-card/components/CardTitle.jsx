import React from 'react'
import Konva from 'konva';
import PropTypes from 'prop-types'
import { Layer, Rect, Text, Circle } from 'react-konva';

function CardTitle(props) {
  return (
    <Layer 
      x={60}
      y={80}
      width={400}
      height={50}
    >
      <Rect
        cornerRadius={10}
        width={400}
        height={70}
        fill={props.colors.secondary}
        shadowBlur={10}
      />
      <Rect
        x={10}
        y={10}
        cornerRadius={10}
        width={380}
        height={50}
        fill={props.colors.primary}
      />
      <Rect
        x={100}
        y={50}
        cornerRadius={15}
        width={200}
        height={30}
        fill={props.colors.secondary}
      />
        <Circle
        x={110}
        y={64}
        radius={5}
        fill={props.colors.primary}
      />
      <Circle
        x={289}
        y={64}
        radius={5}
        fill={props.colors.primary}
      />
      <Text 
        x={120}
        y={20}
        align="center"
        text="ルフィ太郎" 
        fontSize={30} 
        fill={props.colors.extra}
        verticalAlign="bottom"  
      />
      <Text 
        x={175}
        y={60}
        align="center"
        text="LUFFY" 
        fontSize={15} 
        fill={props.colors.primary}
        verticalAlign="bottom"  
      />
    </Layer>
  )
}

CardTitle.propTypes = {

}

export default CardTitle

