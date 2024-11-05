import React, { useContext } from "react";
import { TodoContext } from "../Hooks/useTodo";

function Footer() {
  const { state } = useContext(TodoContext);
  const completedTasks = state.filter((list) => list.isCompleted === true);

  return (
    <div className="flex flex-bottom justify-between items-center p-10 absolute bottom-0 left-0 gap-x-[600px]">
      <h1 className="text-2xl font-bold text-orange-500">
        Total Tasks : {state.length}{" "}
      </h1>
      <h1 className="text-2xl font-bold text-green-600">
        {" "}
        Tasks Completed : {completedTasks.length}
      </h1>
    </div>
  );
}

export default Footer;
