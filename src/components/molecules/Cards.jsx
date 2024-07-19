import React from 'react'
import './Cards.css'
import Imagenes from '../atoms/Imagenes.jsx'
import Text from "../atoms/Text.jsx";

export default function Card(props) {
  return (
    <>
        <div id='card_container'>
            <div id="paint">
                <Imagenes val={props.val}></Imagenes>
            </div>
            <div id="written">
                <Text val={props.text}></Text>
            </div>
        </div>
    </>
  )
}
