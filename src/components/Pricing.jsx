import React from 'react'
import PricingCard from './PricingCard'
import prices from '../data.js'

const Pricing = () => {
  return (
    <section className='pricing__cards'>
      {prices.map((price, i) => (
        <PricingCard
          key={i}
          type={price.type}
          price={price.price}
          data={price.data}
        />
      ))}
    </section>
  )
}

export default Pricing
