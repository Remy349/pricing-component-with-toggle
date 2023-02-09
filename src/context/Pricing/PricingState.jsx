import React, { useReducer } from 'react'
import PricingContext from './PricingContext'
import PricingReducer from './PricingReducer'

const PricingState = ({ children }) => {
  const initialState = {
    isClicked: false
  }

  const [state, dispatch] = useReducer(PricingReducer, initialState)

  const toggleClick = () => {
    dispatch({ type: 'TOGGLE_CLICK' })
  }

  return (
    <PricingContext.Provider
      value={{ isClicked: state.isClicked, toggleClick }}
    >
      {children}
    </PricingContext.Provider>
  )
}

export default PricingState
