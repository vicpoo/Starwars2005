import React from 'react'
import Container from '../molecules/Container'
import Over from '../molecules/Over'
import './Section.css'
import Cards from '../molecules/Cards'
import Back from '../molecules/Back'
import mySQL from '../../data/dataBase'

export default function Section() {
  return (
    <>
        <Over></Over>
        <div id="main_container">
        {
                mySQL.heroSection.map(content => {
                  return (
                    <>
                    <Container val={content.image} text={content.text}></Container>
                    </>
                  )
                })
              }
            <div id="cards_container">
              {
                mySQL.cards.map(content => {
                  return (
                    <>
                    <Cards val={content.image} text={content.text}></Cards>
                    </>
                  )
                })
              }
            </div>
        </div>
        <Back text={"SOY EL BOTTOM"}></Back>
    </>
  )
}
    