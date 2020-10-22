export const initialState = {
  user: null,
  playlists: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log("reducer | action => ", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
