import React from 'react'
import Pricing from './components/Pricing'
import Toggle from './components/Toggle'
import PricingState from './context/Pricing/PricingState'

function App () {
  return (
    <main className='pricing'>
      <h1 className='pricing__title'>Our Pricing</h1>
      <PricingState>
        <Toggle />
        <Pricing />
      </PricingState>
    </main>
  )
}

export default App
