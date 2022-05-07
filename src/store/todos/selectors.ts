import IStore from "./types";

export const selectTodosAll = (state: {
  todosReducer: IStore;
}): IStore["todosAll"] => state.todosReducer.todosAll;
