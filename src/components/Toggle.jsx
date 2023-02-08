import React from 'react'

const Toggle = () => {
  return (
    <div className='pricing__toggle'>
      <span className='pricing__toggle-text'>Annually</span>
      <label className='pricing__toggle-btn' htmlFor='checkbox'>
        <input
          className='pricing__toggle-btn_input'
          type='checkbox'
          id='checkbox'
        />
        <span className='pricing__toggle-btn_slider pricing__toggle-btn_round' />
      </label>
      <span className='pricing__toggle-text'>Monthly</span>
    </div>
  )
}

export default Toggle
