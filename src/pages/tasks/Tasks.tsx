import { useState, useRef, useEffect } from "react";
// import Sidebar from "../../components/sidebar/Sidebar.tsx";
import Trashcan from "../../components/trashcan/Trashcan.tsx";
import AddTask from "../../components/addtask/AddTask.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";
import TasksDone from "../../components/tasksdone/TasksDone.tsx";
import useLocalStorage from "use-local-storage";
import "./Tasks.scss";

type PropsType = {
  setLogs: React.Dispatch<React.SetStateAction<Array>>;
};

// const Tasks = ({ setViewTasks }: PropsType) => {
const Tasks = ({ setLogs }: PropsType) => {
  const [inputValue, setInputValue] = useState("");
  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useLocalStorage("taskListDeserialized", []);
  // const [tasksCount, setTasksCount] = useState(0);
  const [tasksCount, setTasksCount] = useLocalStorage(
    "tasksCountDeserialized",
    0
  );

  const todoRefs = useRef([]);

  // Todo Lists
  useEffect(() => {
    setTaskList(taskList);
  }, [taskList]);

  // Finished Tasks
  useEffect(() => {
    setTasksCount(tasksCount);
  }, []);

  // Tasks Finished (Local Storage)
  /*   useEffect(() => {
    const tasksCountDeserialized = localStorage.getItem("tasksCountSerialized");
    if (tasksCountDeserialized) {
      setTasksCount((prevValue) => (prevValue ? tasksCountDeserialized : 0));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksCountSerialized", JSON.stringify(tasksCount));
  }, [tasksCount]); */

  // Todo Lists (Local Storage)
  /*   useEffect(() => {
    const data = window.localStorage.getItem("taskList");
    console.log("data " + data);
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log("taskList " + taskList);
  }, [taskList]); */

  // Retrieving data from localStorage

  // Check Tasks Total
  const tasks = taskList.length;
  if (tasks === 0) {
    setTimeout(() => {
      setTaskList(["Ready For Some New Tasks? :D"]);
    }, 1000);
  }

  // Handle User Input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle Add Task
  const addTask = (inputValue) => {
    if (inputValue) {
      const updatedTaskList = [...taskList, inputValue];
      setTaskList(updatedTaskList);
      setInputValue("");
    }
  };

  return (
    <div className="tasks">
      {/* <Sidebar setViewTasks={setViewTasks} /> */}

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
          {taskList.map((task, idx) => (
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
