export default (state, action) => {
  const { type } = action

  switch (type) {
    case 'TOGGLE_CLICK':
      return {
        ...state,
        isClicked: !state.isClicked
      }

    default:
      return state
  }
}
