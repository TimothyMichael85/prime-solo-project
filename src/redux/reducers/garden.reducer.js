const gardenReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GARDEN':
        return action.payload;
      case 'UNSET_GARDEN':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default gardenReducer;