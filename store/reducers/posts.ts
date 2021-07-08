import * as actionTypes from "@store/actionTypes";
const postsReducer = (posts = [], action: any) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return action.posts;
    default:
      return posts;
  }
};
export default postsReducer;
