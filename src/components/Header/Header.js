import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({quote}) => {
  return (
    <>
    <header>
      <div className='homeButton'>
        <NavLink className='link' to='/story'>
          <p className='text'>positiviTEA.</p>
        </NavLink>
      </div>
      <div className='quoteWrapper'>
        <h3 className='quote'>{quote.content}</h3>
        <h3 className='author'>-{quote.author}</h3>
      </div>
    </header>
    </>
  )
}

export default Header

Header.propTypes = {
  quote: PropTypes.object,
  landingPageView: PropTypes.bool
}