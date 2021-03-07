import React from 'react'
import './FavoritedCards.css'

const FavoritedCards = ({title, image, url}) => {
  return (
    <article className='card'>
      <p className='savedTitle'>{title}</p>
      <img className='image' src={image}/>
      {/* <p>{url}</p> */}
    </article>
  )
}

export default FavoritedCards