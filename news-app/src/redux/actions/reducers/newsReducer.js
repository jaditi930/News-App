const intialState = {
    current_news: [],
  };
  
  export const newsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case "SET_NEWS":
        return { ...state, news: payload };
      default:
        return state;
    }
  };
  
  export const selectedNewsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case "SELECTED_NEWS":
        return { ...state, ...payload };
      case "REMOVE_SELECTED_NEWS":
        return {};
      default:
        return state;
    }
  };