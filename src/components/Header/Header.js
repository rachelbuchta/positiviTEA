import React from 'react'
import './Header.css'

function Header({quote}) {

  return (
    <header>
      <h3 className='quote'>{quote.content}</h3>
      <h3 className='author'>{quote.author}</h3>
    </header>
  )
}

export default Header