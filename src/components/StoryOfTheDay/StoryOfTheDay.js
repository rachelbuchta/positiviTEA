import React, { useEffect, useState } from 'react'
import './StoryOfTheDay.css'
import emptyHeart from '../../assets/heart.png'
import filledHeart from '../../assets/like.png'
import saved from '../../assets/bookmark.png'
import { Link, Redirect } from 'react-router-dom'
import nullImage from '../../assets/unnamed.png'

function StoryOfTheDay({news, grabNews, keyWord}) {
const [isFavorited, setIsFavorited] = useState(false)
const date = new Date(news.publishedAt)

const toggleHeart = () => {
  setIsFavorited(isFavorited => !isFavorited)
  const jsonNews = JSON.stringify(news)
  if(localStorage.getItem(`${news.title}`) === null) {
    localStorage.setItem(`${news.title}`, jsonNews)
  }
  if(isFavorited) {
    localStorage.removeItem(`${news.title}`)
  }
}

useEffect(() => {
  setIsFavorited(false)
  const localStorageKeys = Object.keys(localStorage)
  if (localStorageKeys.includes(news.title)) {
    setIsFavorited(true)
  }
}, [news])

  return (
    <>
    {!Object.keys(news).length && <Redirect to='/'/> }
    <article className='story'>
      <h2 className='sod'>Story Of The Day</h2>
      <div className='contentWrapper'>
        <section className='imgWrapper'>
          {news.urlToImage === null ? 
          <img className='newsImage' src={nullImage} alt='image not available'/>
          :
          <img className='newsImage' src={news.urlToImage} alt='news story image'/>
          }
          <div className='titleWrapper'>
            <p className='storyTitle'>{news.title}</p>
          </div>
        </section>
        <section className='dateAndLabel'>
          <p className='date'>{date.toDateString()}</p>
          <p className='label'>{`${keyWord}`}</p>
        </section>
        <section className='descriptionWrapper'>
          <p className='description'>{news.description}</p>
          <a className='viewMore' href={news.url} target="_blank">
            See Full Story
          </a>
        </section>
      </div>
      <section className='navBtns'>
        <img 
          className='favorite' 
          src={isFavorited ? filledHeart : emptyHeart} 
          alt='favorite and unfavorite news story'
          onClick={toggleHeart}
        />
        <button onClick={grabNews} className='spillAgain'>Spill it again..</button>
        <Link to='/favorite-stories'>
          <img className='viewSaved' src={saved} alt='view saved stories'/>
        </Link>
      </section>
    </article>
    </>
  )
}

export default StoryOfTheDay