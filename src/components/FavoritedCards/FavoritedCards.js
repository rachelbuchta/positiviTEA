import React from 'react'
import './FavoritedCards.css'

const FavoritedCards = ({title, image, url}) => {
  return (
    <article className='card'>
   
      <p>{title}</p>
      <img src={image}/>
      <p>{url}</p>
    </article>
  )
}

export default FavoritedCards