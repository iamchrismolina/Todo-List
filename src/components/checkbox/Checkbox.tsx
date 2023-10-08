// import { useState } from "react";
import "./checkbox.scss";

// const [tasksCount, setTasksCount] = useState(0);

// type DivElementType = React.MouseEvent<HTMLDivElement>;
type FinishedTaskPropsType = {
  e: React.MouseEvent<HTMLDivElement>;
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
};

// Handle Finished Task
let delTask: number | null;

const finishedTask = ({ e, taskList, setTaskList }: FinishedTaskPropsType) => {
  console.log(e);
  const elemTarget = e.currentTarget;
  console.log(e.currentTarget);
  const taskIdx = Number(elemTarget.id);
  console.log(Number(elemTarget.id));

  if (!elemTarget.classList.contains("check-box-green")) {
    elemTarget.classList.add("check-box-green");

    delTask = setTimeout(() => {
      elemTarget.classList.remove("check-box-green");
      const updatedTaskList = taskList.filter((task, i) => i !== taskIdx);
      setTaskList(updatedTaskList);
      // setTasksCount((prevCount) => prevCount + 1);
    }, 500);
  } else {
    if (delTask != null) {
      clearTimeout(delTask);
    }
    elemTarget.classList.remove("check-box-green");
  }
};

type PropsType = {
  idx: number;
  todoRefs: Array<HTMLDivElement | null | number>[]; // Loose Type Assigning or Checking
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
};

const Checkbox = ({ idx, todoRefs, taskList, setTaskList }: PropsType) => {
  return (
    <div
      id={idx.toString()}
      className="checkbox-wrapper-19"
      ref={(elem) => {
        todoRefs[idx] = [elem, idx];
      }}
      onClick={(e) => finishedTask({ e, taskList, setTaskList })}
    ></div>
  );
};

export default Checkbox;
