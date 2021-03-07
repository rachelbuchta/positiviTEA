import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({quote}) => {

  return (
    <header>
      <NavLink to='/story'>
        <p>positiviTEA.</p>
      </NavLink>
        <h3 className='quote'>{quote.content}</h3>
        <h3 className='author'>{quote.author}</h3>
    </header>
  )
}

export default Header