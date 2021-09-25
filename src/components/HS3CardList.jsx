import React from 'react'
import HS3Card from './HS3Card'
import {HS3Cards} from '../data/HS3Cards'

export default function HS3CardList() {

  const cardsComponents = HS3Cards.map((card , i) => {
    return <HS3Card image={card.image} title={card.title} desc={card.desc} />
  })

  return (
    <>
      {cardsComponents}
    </>
  )
}
