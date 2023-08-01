export const getNews = (current_news) => {
    return {
      type: "GET_NEWS",
      payload: current_news,
    };
  };
  
  export const selectedNews = (news) => {
    return {
      type: "SELECTED_NEWS",
      payload: news,
    };
  };
  export const removeSelectedNews = () => {
    return {
      type: "REMOVE_SELECTED_NEWS",
    };
  };