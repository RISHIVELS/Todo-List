import React, { useContext } from "react";
import IndividualList from "../components/IndividualList";
import { TodoContext } from "../Hooks/useTodo";

function TasksList() {
  const { state, deleteList, editList, completed } = useContext(TodoContext);

  return (
    <div>
      <div className="flex justify-between items-center px-10 text-xl font-bold border-t-2 pt-2 border-t-purple-700 border-b-2 pb-2 border-b-purple-700">
        <h1 className="text-red-600">S.NO</h1>
        <h1 className="text-green-600">TODO LISTS</h1>
        <h1 className="text-violet-600">MODES</h1>
      </div>
      {state.map((list, index) => (
        <IndividualList
          key={list.id}
          list={list}
          index={index + 1}
          deleteList={deleteList}
          editList={editList}
          completed={completed}
        />
      ))}
    </div>
  );
}

export default TasksList;
