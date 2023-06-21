import { todoType } from "../types/todoListTypeAction";

const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case todoType.TODLIST_GET:
        return {
          ...state,
          task: action.payload.task,
        };
      case todoType.TODOLIST_ADD:
        return {
          ...state,
          task: [...state.task, action.payload],
        };
      case todoType.TODOLIST_FILTERED:
        return {
          ...state,
          task: action.payload.task,
        };
      default:
        return state;
    }
  };