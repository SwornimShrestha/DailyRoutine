import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Task from "../components/Task";
const Tasks = () => {
  const [openTaskDialogBox, setOpenTaskDialogBox] = useState(false);

  const toggleTaskDialogBox = () => {
    setOpenTaskDialogBox((prevState) => !prevState);
  };
  return (
    <div>
      <div className=" px-10 md:px-20 mt-32  relative">
        {/* {left-side} */}
        <div className=" w-full  flex flex-col gap-9 z-10 items-center">
          <h1 className=" text-5xl md:text-6xl font-bold">
            Welcome to Your Dashboard<br></br>
            <span className=" text-blue-400  mx-40">Swornim Shrestha</span>
          </h1>
          <div className="flex flex-row gap-6">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              onClick={toggleTaskDialogBox}
            >
              Create Task
            </Button>
            <Link to="/sign-up">
              <Button gradientDuoTone="purpleToBlue" outline>
                Task List
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-72 h-24 bg-blue-400 absolute left-20 top-28 blur-3xl z-0"></div>
      {openTaskDialogBox && (
        <Task
          isOpen={openTaskDialogBox}
          onClose={() => setOpenTaskDialogBox(false)}
        />
      )}
    </div>
  );
};

export default Tasks;
