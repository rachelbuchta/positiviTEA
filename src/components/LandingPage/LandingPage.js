import React from 'react'
import './LandingPage.css'
import teacup from '../../assets/tea.svg'

function LandingPage() {

  return (
      <main>
        <h1>positiviTEA.</h1>
        <img className='teacup' alt='teacup' src={teacup}/> 
      </main>
  )
}

export default LandingPage