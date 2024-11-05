import React from "react";

function Button({ onClick, children, color = "blue", type = "" }) {
  const vannam = {
    red: "bg-red-600 hover:bg-red-500",
    green: "bg-green-600 hover:bg-green-500",
    yellow: "bg-yellow-600 hover:bg-yellow-500 px-5",
    blue: "bg-blue-600 hover:bg-blue-500  py-[10px]",
    primary: "m-10 bg-blue-600 hover:bg-blue-500 px-7 py-[10px]",
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`${vannam[color]} p-2 rounded-lg  ${vannam[type]}text-white font-sans font-semibold ${vannam[color]} duration-300`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
