import * as actionTypes from "@store/actionTypes";
const usersReducer = (users = [], action: any) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return action.users;
    default:
      return users;
  }
};
export default usersReducer;
