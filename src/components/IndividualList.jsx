import React, { useState } from "react";
import Button from "./Button";

function TodoLists({ index, editList, deleteList, completed, list }) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(list.text);

  return (
    <div className="flex items-center justify-between px-10 mt-4">
      <h1 className="text-xl font-semibold">{index}</h1>
      <h1
        className={`text-xl font-bold ${
          list.isCompleted && "line-through decoration-green-500 "
        }`}
      >
        {list.text}
      </h1>
      <div className="flex gap-x-5">
        <Button onClick={() => deleteList(list.id)} color="red">
          Delete
        </Button>

        {!list.isCompleted && (
          <Button onClick={() => completed(list.id)}>Completed</Button>
        )}
        {!isEdit && !list.isCompleted && (
          <Button
            onClick={() => {
              setIsEdit((curr) => !curr);
            }}
            color="yellow"
          >
            Edit
          </Button>
        )}
        {isEdit && (
          <>
            <input
              type="text"
              placeholder="Edit task"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              color="green"
              onClick={() => {
                if (!name) return;
                editList(list.id, name);
                setName("");
                setIsEdit(!isEdit);
              }}
            >
              Update
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoLists;
