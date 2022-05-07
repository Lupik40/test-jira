import { AnyAction } from "redux";
import IStore from "./types";

const initialState = {
  todosAll: [],
};

const todosReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case "todos/setTodosAll":
      return {
        ...state,
        todosAll: [...action.payload],
      };
    case "todos/setTodosProggress":
      return {
        ...state,
        todosAll: state.todosAll.map((item) => {
          if (item.id === action.payload.id) {
            item.completed = "In Proggress";
          }
          return item;
        }),
      };
    case "todos/setTodosDone":
      return {
        ...state,
        todosAll: state.todosAll.map((item) => {
          if (item.id === action.payload.id) {
            item.completed = "Done";
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
