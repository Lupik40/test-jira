import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosAll } from "../../store/todos/selectors";
import { loadTodosAll } from "../../store/todos/actions";
import ITodo from "../../types/ITodo";
import Subtitle from "../Subtitle";
import TodosList from "../TodosList/index";
import Loader from "../Loader";
import "./styles.scss";

const Board = () => {
  const dispatch = useDispatch();
  const todosList = useSelector(selectTodosAll);

  useEffect(() => {
    dispatch(loadTodosAll());
  }, [dispatch]);

  const getTodosToDo = (): ITodo[] => {
    return todosList.filter((item) => item.completed === "To do");
  };

  const getTodosProggress = (): ITodo[] => {
    return todosList.filter((item) => item.completed === "In Proggress");
  };

  const getTodosDone = (): ITodo[] => {
    return todosList.filter((item) => item.completed === "Done");
  };

  return (
    <div className="board">
      <div className="board__block">
        <Subtitle text={"To do"} />
        {todosList.length > 0 ? (
          <TodosList list={getTodosToDo()} type="board" />
        ) : (
          <Loader />
        )}
      </div>
      <div className="board__block">
        <Subtitle text={"In progress"} />
        {todosList.length > 0 ? (
          <TodosList list={getTodosProggress()} type="board" />
        ) : (
          <Loader />
        )}
      </div>
      <div className="board__block">
        <Subtitle text={"Done"} />
        {todosList.length > 0 ? (
          <TodosList list={getTodosDone()} type="board" />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Board;
