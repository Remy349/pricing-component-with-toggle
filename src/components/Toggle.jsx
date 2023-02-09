import React, { useContext } from 'react'
import PricingContext from '../context/Pricing/PricingContext'

const Toggle = () => {
  const { toggleClick, isClicked } = useContext(PricingContext)

  return (
    <div className='pricing__toggle'>
      <span className='pricing__toggle-text'>Annually</span>
      <label className='pricing__toggle-btn' htmlFor='checkbox'>
        <input
          className='pricing__toggle-btn_input'
          type='checkbox'
          id='checkbox'
          checked={isClicked}
          onChange={() => toggleClick()}
        />
        <span className='pricing__toggle-btn_slider' />
      </label>
      <span className='pricing__toggle-text'>Monthly</span>
    </div>
  )
}

export default Toggle
