import * as actionTypes from "@store/actionTypes";
export const setPosts = (posts: any) => {
  return {
    type: actionTypes.SET_POSTS,
    posts,
  };
};
