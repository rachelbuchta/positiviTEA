import React from 'react'
import './Header.css'

function Header({quote}) {

  return (
    <>
      <h3>{quote.content}</h3>
      <h3>{quote.author}</h3>
    </>
  )
}

export default Header