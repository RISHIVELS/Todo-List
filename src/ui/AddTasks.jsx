import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { TodoContext } from "../Hooks/useTodo";

function AddTasks() {
  const [text, setText] = useState();

  const { addList } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    const name = {
      id: Date.now(),
      text,
      isCompleted: false,
    };

    addList(name);
    setText("");
  }

  return (
    <form
      className="p-4  flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={text}
        placeholder="Add TodoList..."
        className="border-2  h-10 w-[50%] border-gray-300 pr-14 pl-4 py-5 text-md"
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="primary" color="blue">
        Add List
      </Button>
    </form>
  );
}

export default AddTasks;
