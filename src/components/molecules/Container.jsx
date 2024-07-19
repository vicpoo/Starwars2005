import React from 'react'
import Imagenes from '../atoms/Imagenes'
import Text from '../atoms/Text'
import './Container.css'

export default function Container(props) {
  return (

    <div id='container'>
        <div id="paint">
            <Imagenes val={props.val}></Imagenes>
        </div>
        <div id="written">
            <Text val={props.text}></Text>
        </div>
    </div>
  )
}