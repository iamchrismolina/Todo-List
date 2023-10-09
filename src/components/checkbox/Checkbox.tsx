import "./checkbox.scss";
import { getUserLog } from "../../utils.js/getUserLog.tsx";

type FinishedTaskPropsType = {
  e: React.MouseEvent<HTMLDivElement>;
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
  setTasksCount: React.Dispatch<React.SetStateAction<number>>;
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
};

// Handle Finished Task
let delTask: number | null;

const finishedTask = ({
  e,
  taskList,
  setTaskList,
  setTasksCount,
  setLogs,
}: FinishedTaskPropsType) => {
  const elemTarget = e.currentTarget;
  const taskIdx = Number(elemTarget.id);

  if (!elemTarget.classList.contains("check-box-green")) {
    elemTarget.classList.add("check-box-green");

    delTask = setTimeout(() => {
      elemTarget.classList.remove("check-box-green");
      const updatedTaskList = taskList.filter((task, i) => i !== taskIdx);
      setTaskList(updatedTaskList);
      if (!(taskList[taskIdx] === "Ready For Some New Tasks? :D")) {
        const task = taskList[taskIdx];
        const action = "marked as completed";
        const log = getUserLog(task, action);

        setLogs((prevTasks) => [...prevTasks, log]);
        setTasksCount((prevCount) => prevCount + 1);
      }
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
  setTasksCount: React.Dispatch<React.SetStateAction<number>>;
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
};

const Checkbox = ({
  idx,
  todoRefs,
  taskList,
  setTaskList,
  setTasksCount,
  setLogs,
}: PropsType) => {
  return (
    <div
      id={idx.toString()}
      className="checkbox-wrapper-19"
      ref={(elem) => {
        todoRefs[idx] = [elem, idx];
      }}
      onClick={(e) =>
        finishedTask({ e, taskList, setTaskList, setTasksCount, setLogs })
      }
    ></div>
  );
};

export default Checkbox;
