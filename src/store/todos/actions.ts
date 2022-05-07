import { Dispatch } from "redux";
import getTodos from "../../services/getTodos";
import getUsers from "../../services/getUsers";
import randomHexColor from "../../services/getRandomColor";
import IStore from "./types";
import ITodo from "../../types/ITodo";

export const setTodosAllAction = (todos: IStore["todosAll"]) => {
  return {
    type: "todos/setTodosAll",
    payload: todos,
  };
};

export const loadTodosAll = () => async (dispatch: Dispatch) => {
  try {
    const responseTodos = await getTodos();
    const responseUsers = await getUsers();
    const responseMapped = responseTodos.data.map(
      (item: ITodo, index: number) => {
        item.completed = "To do";
        item.name = responseUsers.data[index].name;
        item.color = randomHexColor();
        return item;
      }
    );
    dispatch(setTodosAllAction(responseMapped));
  } catch (e) {
    console.log("Error", e);
  }
};

export const setTodosProggress = (todo: ITodo) => {
  return {
    type: "todos/setTodosProggress",
    payload: todo,
  };
};

export const setTodosDone = (todo: ITodo) => {
  return {
    type: "todos/setTodosDone",
    payload: todo,
  };
};
