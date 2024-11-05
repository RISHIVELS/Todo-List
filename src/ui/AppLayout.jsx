import React from "react";
import Header from "./Header";
import AddTasks from "./AddTasks";
import TasksList from "./TasksList";
import Footer from "./Footer";
import { TodoProvider } from "../Hooks/useTodo";

function AppLayout() {
  return (
    <>
      <TodoProvider>
        <div className="max-w-[1280px] mx-auto h-screen flex justify-center">
          <div className="mt-10 w-[100%] shadow-2xl p-4 m-4 relative">
            <Header />
            <AddTasks />
            <TasksList />
            <Footer />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}
export default AppLayout;
