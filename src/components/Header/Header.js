import React from 'react'
import './Header.css'

function Header({quote}) {

  return (
    // <header>
    //   <h3>{quote.content}</h3>
    //   <h3>{quote.author}</h3>
    // </header>
    <header>
      <h3>"In the middle of every difficulty lies opportunity."</h3>
      <h3>-Albert Einstein</h3>
    </header>
  )
}

export default Header