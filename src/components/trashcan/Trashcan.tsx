import { getUserLog } from "../../utils.js/getUserLog.tsx";
import "./trashcan.scss";

type DeleteTaskProps = {
  e: React.MouseEvent<HTMLDivElement>;
  todoRefs: Array<[HTMLDivElement | null, number]>;
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
};

// Handle Delete Task
const deleteTask = ({
  e,
  todoRefs,
  taskList,
  setTaskList,
  setLogs,
}: DeleteTaskProps) => {
  // const elemTarget = e.currentTarget;
  const taskIdx = Number(e.currentTarget.id);

  const deleteLog = getUserLog(taskList[taskIdx], "deleted");

  const updatedTaskList = taskList.filter((task, i) => i !== taskIdx);

  todoRefs[taskIdx][0]?.classList.remove("check-box-green");
  setLogs((prevLogs) => [...prevLogs, deleteLog]);
  setTaskList(updatedTaskList);
};

type PropsType = {
  idx: number;
  todoRefs: Array<[HTMLDivElement | null, number]>; // Strict Type Checking
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
};

const Trashcan = ({
  idx,
  todoRefs,
  taskList,
  setTaskList,
  setLogs,
}: PropsType) => {
  return (
    <>
      <div
        className="trash-box"
        id={idx.toString()}
        onClick={(e) =>
          deleteTask({ e, todoRefs, taskList, setTaskList, setLogs })
        }
      >
        <div className="trash"></div>
        <div className="trash-top"></div>
        <div className="trash-btm">
          <div className="trash-lines">
            <div className="trash-line"></div>
            <div className="trash-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trashcan;
