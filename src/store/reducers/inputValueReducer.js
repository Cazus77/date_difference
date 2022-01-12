import { initialState } from "../initialState";
import { INPUT_NUMBER_DAYS } from "../action/actions";

export const inputValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_NUMBER_DAYS:
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};
