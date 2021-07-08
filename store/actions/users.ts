import * as usersApi from "@apiClient/users";
import * as actionTypes from "@store/actionTypes";
export const setPosts = (posts: any) => {
  return {
    type: actionTypes.SET_POSTS,
    posts,
  };
};
export const getUsers = () => async (dispatch: any) => {
  try {
    const { data } = await usersApi.fetchUsers();
    dispatch({
      type: actionTypes.GET_USERS,
      users: data,
    });
  } catch (err) {
    console.log(err);
  }
};
