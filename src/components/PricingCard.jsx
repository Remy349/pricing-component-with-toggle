import React, { useContext } from 'react'
import PricingContext from '../context/Pricing/PricingContext'

const PricingCard = ({ type, price, data }) => {
  const { isClicked } = useContext(PricingContext)

  return (
    <article className={`pricing__card ${type}`}>
      <h2 className={`pricing__card-type ${type}`}>{type}</h2>
      <h3 className={`pricing__card-price ${type}`}>
        {!isClicked ? price.annually : price.monthly}
      </h3>
      <ul className={`pricing__card-list ${type}`}>
        <li>{data.storage} Storage</li>
        <li>{data.users} Users Allowed</li>
        <li>Send up to {data.send} GB</li>
      </ul>
      <a href='#' className={`pricing__card-more ${type}`}>
        Learn More
      </a>
    </article>
  )
}

export default PricingCard
