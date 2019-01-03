import React from 'react'
import Konva from 'konva';
import PropTypes from 'prop-types'
import { Layer, Rect } from 'react-konva';

function CardBackground(props) {
  return (
    <Layer>
      <Rect
        x={20}
        y={50}
        width={600}
        height={800}
        fill={props.colors.primary}
        shadowBlur={10}
        cornerRadius={10}
      />
      
      <Rect
        x={490}
        y={50}
        width={130}
        height={800}
        cornerRadius={10}
        fill={props.colors.secondary}
      />
      <Rect
        x={489}
        y={50}
        width={10}
        height={800}
        fill={props.colors.secondary}
      />
    </Layer>
  )
}

CardBackground.propTypes = {

}

export default CardBackground

