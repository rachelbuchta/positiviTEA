import React from 'react'
import './FavoritedCards.css'
import remove from '../../assets/cancel.png'

const FavoritedCards = ({title, image, url}) => {
  return (
    <section className='cardAndDelete'>
      <img className='remove' src={remove} alt='delete story' />
      <article className='card'>
        <p className='savedTitle'>{title}</p>
        <img className='image' src={image}/>
        {/* <p>{url}</p> */}
      </article>
    </section>
  )
}

export default FavoritedCards