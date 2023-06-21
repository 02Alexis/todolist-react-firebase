import React from "react";
import { MdDelete } from "react-icons/md";

const style = {
  li: `bg-gray-800 text-white p-4 my-2 rounded-md flex justify-between`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  text: `text-xl font-bold cursor-pointer`,
  textComplete: `text-xl font-bold text capitalize cursor-pointer line-through`,
}

function Todo({ todo, toggleComplete, deleteTodo }) {
  
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <h1 className={todo.completed ? style.textComplete : style.text}
          onClick={() => toggleComplete(todo)}
        >
          {todo.text}
        </h1>
      </div>
      <MdDelete className="text-red-500 mt-4 text-3xl hover:text-red-400" onClick={() => deleteTodo(todo.id)} />
    </li>
  );
}

export default Todo;
