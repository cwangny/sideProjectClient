const initState = {
  images: [],
}

const rootReducer = (state = initState, action) => {
  //console.log(action, "from reducer");
  if (action.type === "ADD_IMAGE") {
    return {
      ...state,
      images: [...state.images, action.imageUri]
    }
  }
  return state;
}

export default rootReducer;