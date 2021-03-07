import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({quote, landingPageView}) => {

  return (
    <>
    {!landingPageView &&
    <header>
      <div className='homeButton'>
        <NavLink className='link' to='/story'>
          <p className='link'>positiviTEA.</p>
        </NavLink>
      </div>
      <div className='quoteWrapper'>
        <h3 className='quote'>{quote.content}</h3>
        <h3 className='author'>-{quote.author}</h3>
      </div>
    </header>
    }
    </>
  )
}

export default Header