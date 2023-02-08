import React from 'react'
import Pricing from './components/Pricing'
import Toggle from './components/Toggle'

function App () {
  return (
    <main className='pricing container'>
      <h1 className='pricing__title'>Our Pricing</h1>
      <Toggle />
      <Pricing />
    </main>
  )
}

export default App
