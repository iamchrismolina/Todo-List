import { useState, useRef, useEffect } from "react";
import Trashcan from "../../components/trashcan/Trashcan.tsx";
import AddTask from "../../components/addtask/AddTask.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";
import TasksDone from "../../components/tasksdone/TasksDone.tsx";
import { getUserLog } from "../../utils.js/getUserLog.tsx";
import useLocalStorage from "use-local-storage";
import "./tasks.scss";

type PropsType = {
  // setLogs: React.Dispatch<React.SetStateAction<string[]>>;
  setLogs: any;
};

const Tasks = ({ setLogs }: PropsType) => {
  const [inputValue, setInputValue] = useState("");
  // const [taskList, setTaskList] = useLocalStorage<(string | React.ChangeEvent<HTMLInputElement>)[]>("taskListDeserialized", []);
  const [taskList, setTaskList] = useLocalStorage<any>("taskListDeserialized", []);
  const [tasksCount, setTasksCount] = useLocalStorage<any>(
    "tasksCountDeserialized",
    0
  );
  
  const todoRefs: any = useRef([]);

  // Todo Lists
  useEffect(() => {
    setTaskList(taskList);
  }, [taskList]);

  // Finished Tasks
  useEffect(() => {
    setTasksCount(tasksCount);
  }, []);

  // Check Tasks Total
  const tasks = taskList.length;
  if (tasks === 0) {
    setTimeout(() => {
      setTaskList(["Ready For Some New Tasks? :D"]);
    }, 1000);
  }

  // Handle User Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle Add Task
  const addTask = (inputValue: string | React.ChangeEvent<HTMLInputElement>) => {
    const log = getUserLog(inputValue, "created");

    if (inputValue) {
      const updatedTaskList: (string | React.ChangeEvent<HTMLInputElement>)[] = [...taskList, inputValue];
      setTaskList(updatedTaskList);
      setLogs((prevTasks: string[]) => [...prevTasks, log]);
      setInputValue("");
    } else {
      return null;
    }
  };

  return (
    <div className="tasks">
      <div className="tasks__task">
        <div className="tasks__add-container">
          <input
            className="tasks__task-input"
            type="text"
            placeholder="Enter your Task"
            name="addtask"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={(e) => (e.key === "Enter" ? addTask(inputValue) : null)}
            id="addtask"
          />
          <span className="tasks__add-task" onClick={() => addTask(inputValue)}>
            <AddTask />
          </span>
        </div>

        <div className="tasks__todos">
          {taskList.map((task: string, idx:  number) => (
            <div key={idx} className="tasks__todo">
              <div className="tasks__content">
                <Checkbox
                  idx={idx}
                  todoRefs={todoRefs}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  setTasksCount={setTasksCount}
                  setLogs={setLogs}
                />
                <span>{task}</span>
              </div>
              <Trashcan
                idx={idx}
                todoRefs={todoRefs}
                taskList={taskList}
                setTaskList={setTaskList}
                setLogs={setLogs}
              />
            </div>
          ))}
        </div>
      </div>

      <TasksDone tasksCount={tasksCount} setTasksCount={setTasksCount} />
    </div>
  );
};

export default Tasks;
