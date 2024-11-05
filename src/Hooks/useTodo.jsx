import { createContext, useReducer } from "react";
import React from "react";
/*

const initialstate = [{
    id:new Date.now(),
    name:football,
    isCompleted:false;
}]

*/

function todoReducer(state, action) {
  switch (action.type) {
    case "addList":
      return [...state, action.payload];
    case "deleteList":
      return state.filter((list) => list.id !== action.payload);
    case "editList":
      return state.map((list) =>
        list.id === action.payload.id
          ? { ...list, text: action.payload.name }
          : list
      );
    case "completed":
      return state.map((list) =>
        list.id === action.payload ? { ...list, isCompleted: true } : list
      );
    default:
      return state;
  }
}

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  function addList(name) {
    dispatch({
      type: "addList",
      payload: name,
    });
  }

  function deleteList(id) {
    dispatch({ type: "deleteList", payload: id });
  }

  function editList(id, name) {
    dispatch({ type: "editList", payload: { id, name } });
  }

  function completed(id) {
    dispatch({ type: "completed", payload: id });
  }

  return (
    <TodoContext.Provider
      value={{
        state,
        addList,
        deleteList,
        editList,
        completed,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
