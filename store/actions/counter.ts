import * as actionTypes from "@store/actionTypes";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch: any) =>
  dispatch({
    type: actionTypes.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch: any) =>
  setInterval(() => {
    dispatch({
      type: actionTypes.TICK,
      payload: { light: true, ts: Date.now() },
    });
  }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: actionTypes.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: actionTypes.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: actionTypes.RESET });
