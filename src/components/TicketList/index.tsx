import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosAll } from "../../store/todos/selectors";
import { loadTodosAll } from "../../store/todos/actions";
import ITodo from "../../types/ITodo";
import TodosList from "../TodosList/index";
import Loader from "../Loader";
import "./styles.scss";

const TicketList = () => {
  const dispatch = useDispatch();
  const todosList = useSelector(selectTodosAll);

  useEffect(() => {
    dispatch(loadTodosAll());
  }, [dispatch]);

  const todoSort = {
    "To do": 0,
    "In Proggress": 1,
    "Done": 2,
  };

  const sortTodos = (a: ITodo, b: ITodo) =>
    todoSort[a.completed] - todoSort[b.completed];

  return (
    <div className="ticket-list">
      {todosList.length > 0 ? (
        <TodosList list={todosList.sort(sortTodos)} type="main" />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TicketList;
