import React from 'react'
import './FavoritedCards.css'
import remove from '../../assets/cancel.png'
import PropTypes from 'prop-types'

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
        <img className='image' alt='news story' src={image}/>
      </article>
    </section>
  )
}

export default FavoritedCards

FavoritedCards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  deleteFromStorage: PropTypes.func
}