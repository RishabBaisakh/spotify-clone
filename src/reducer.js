export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBZesPhQ_tOUfniiZjq3UHQgl97zhUFVqLNrLGJf-31D60DPWk5NrDDMyRWsyvffzu-grP12NGCBI4bjAc5BlpWuXOt1EoDjCeqNLojCPUqaaoK1AdS-EgRnGluZx4WcVjszrt_uwymzTMDduxH_FAZE23bfDbt8Q",
};

const reducer = (state, action) => {
  console.log("Reached reducer!");
  switch (action.type) {
    case "SET_USER":
      console.log("SET_USER");
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      console.log("SET_TOKEN");
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      console.log("SET_PLAYLISTS");
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
