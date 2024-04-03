import React, { useState } from "react";
const App = () => {
  const [bgcolor, setbgColor] = useState("black");



  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: bgcolor }}>
        <div className="fixed flex text-white flex-wrap justify-center bottom-16 inset-x-0 py-4">
          <div className="flex flex-wrap bg-white rounded-lg gap-2 px-3 py-1">
            <button
              onClick={() => {
                setbgColor("red")
                setTimeout(() => {
                  setbgColor("black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-red-600 px-2 font-bold "
            >
              Red
            </button>
            <button
              onClick={() => {
                setbgColor("yellow");
                setTimeout(() => {
                  setbgColor("Black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-yellow-600 px-2 font-bold "
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setbgColor("blue");
                setTimeout(() => {
                  setbgColor("Black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-blue-600 px-2 font-bold "
            >
              Blue
            </button>
            <button
              onClick={() => {
                setbgColor("Green");
                setTimeout(() => {
                  setbgColor("Black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-green-600 px-2 font-bold "
            >
              Green
            </button>
            <button
              onClick={() => {
                setbgColor("Purple");
                setTimeout(() => {
                  setbgColor("Black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-purple-600 px-2 font-bold "
            >
              Blue
            </button>
            <button
              onClick={() => {
                setbgColor("Violet");
                setTimeout(() => {
                  setbgColor("Black");
                }, 3000);
              }}
              className="rounded-xl text-white bg-violet-600 px-2 font-bold "
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
