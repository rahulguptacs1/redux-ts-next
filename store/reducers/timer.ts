import * as actionTypes from "@store/actionTypes";
// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        lastUpdate: action.payload.ts,
        light: !!action.payload.light,
      };
    default:
      return state;
  }
};
export default timerReducer;
