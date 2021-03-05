import React from 'react'
import './LandingPage.css'
import teacup from '../../assets/tea.svg'


function LandingPage() {

  return (
      <main>
        <h1 className='header'>positiviTEA.</h1>
        <img className='teacup' alt='teacup' src={teacup}/> 
        <p className='intro-text'>Get the tea on all things good and interesting happening in the world.</p>
        <button className='spill-button'>Spill it..</button>
      </main>
  )
}

export default LandingPage