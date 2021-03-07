import React from 'react'
import './FavoritedCards.css'
import remove from '../../assets/cancel.png'

const FavoritedCards = ({title, image, url, id, deleteFromStorage}) => {
  return (
    <section className='cardAndDelete'>
      <img onClick={deleteFromStorage} className='remove' src={remove} id={id} alt='delete story' />
      <article className='card'>
        <div className='savedTitleWrapper'>
        <a className='more' href={url} target='_blank'>
          <p className='savedTitle'>{title}</p>
        </a>
        </div>
        <img className='image' src={image}/>
      </article>
    </section>
  )
}

export default FavoritedCards