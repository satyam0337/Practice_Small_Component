import { INC, DEC } from "./actionType";

const initData = {
  count: 0,
};
export const reducer = ((state = initData, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + 1,
      };

    case DEC:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
});
