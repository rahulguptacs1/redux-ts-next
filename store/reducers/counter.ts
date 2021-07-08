import * as actionTypes from "@store/actionTypes";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }: { type: string }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.RESET:
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
