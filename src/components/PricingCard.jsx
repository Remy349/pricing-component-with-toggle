import React from 'react'

const PricingCard = () => {
  return (
    <article className='pricing__card basic'>
      <h2 className='pricing__card-type'>Basic</h2>
      <h3 className='pricing__card-price'>$199.99</h3>
      <ul className='pricing__card-list'>
        <li className='pricing__card-item'>500 GB Storage</li>
        <li className='pricing__card-item'>2 Users Allowed</li>
        <li className='pricing__card-item'>Send up to 3 GB</li>
      </ul>
      <a href='#' className='pricing__card-more basic'>
        Learn More
      </a>
    </article>
  )
}

export default PricingCard
