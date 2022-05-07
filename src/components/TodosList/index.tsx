import React from "react";
import ITodo from "../../types/ITodo";
import TodosItem from "../TodosItem";
import "./styles.scss";

interface ITodosListParams {
  list: ITodo[];
  type: string;
}

const TodosList: React.FC<ITodosListParams> = ({ list, type }) => {
  return (
    <ul className="list">
      {list.map((item) => (
        <TodosItem item={item} key={item.id} type={type} />
      ))}
    </ul>
  );
};

export default TodosList;
