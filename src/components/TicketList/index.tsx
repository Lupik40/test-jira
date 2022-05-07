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

  const sortForStatus = (firstItem: ITodo, secondItem: ITodo): number => {
    const firstComp = firstItem.completed;
    const secComp = secondItem.completed;

    if (firstComp === "Done" && secComp === "In Proggress") {
      return 1;
    } else if (firstComp === "In Proggress" && secComp === "To do") {
      return 1;
    } else if (firstComp === "Done" && secComp === "To do") {
      return 1;
    }

    return -1;
  };

  return (
    <div className="ticket-list">
      {todosList.length > 0 ? (
        <TodosList list={todosList.sort(sortForStatus)} type="main" />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TicketList;
