import React from 'react'
import './Header.css'

const Header = ({quote}) => {

  return (
    <header>
      <p>positiviTEA.</p>
      <h3 className='quote'>{quote.content}</h3>
      <h3 className='author'>{quote.author}</h3>
    </header>
  )
}

export default Header