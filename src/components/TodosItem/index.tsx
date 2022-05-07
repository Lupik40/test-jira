import React from "react";
import { useDispatch } from "react-redux";
import { setTodosProggress, setTodosDone } from "../../store/todos/actions";
import prepareName from "../../services/prepareName";
import ITodo from "../../types/ITodo";
import "./styles.scss";

interface ITodosItemParams {
  item: ITodo;
  type: string;
}

const TodosItem: React.FC<ITodosItemParams> = ({ item, type }) => {
  const dispatch = useDispatch();

  const bgColorObj = { backgroundColor: item.color };

  const handleClick = () => {
    switch (item.completed) {
      case "To do":
        dispatch(setTodosProggress(item));
        break;
      case "In Proggress":
        dispatch(setTodosDone(item));
        break;
    }
  };

  return (
    <li className="item" onClick={handleClick}>
      <div className="item__img" style={bgColorObj}>
        {prepareName(item.name)}
      </div>
      <h2 className="item__title">{item.title}</h2>
      {type === "main" ? (
        <p className="item__completed">{item.completed}</p>
      ) : null}
    </li>
  );
};

export default TodosItem;
