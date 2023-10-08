import { useState, useRef } from "react";
import Trashcan from "../../components/trashcan/Trashcan.tsx";
import AddTask from "../../components/addtask/AddTask.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";
import "./Tasks.scss";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
  ]);

  const todoRefs = useRef([]);

  const [tasksCount, setTasksCount] = useState(0);

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
      <aside className="tasks__sidebar">
        <span className="tasks__task-category">Tasks</span>

        <div className="tasks__task-list">
          <div className="tasks__highlight tasks__highlighter">l</div>
          <div className="tasks__icon-container">
            <img
              className="tasks__task-icon"
              src="/public/images/task_icon/quest-task1-freepik-David-Carapinha.png"
              style={{ width: "5rem", height: "5rem" }}
              alt=""
            />
          </div>
        </div>
        <span className="tasks__history-category">History</span>

        <div className="tasks__task-history">
          <div className="tasks__highlight tasks__highlighter">l</div>
          <div className="tasks__icon-container">
            <img
              className="tasks__history-icon"
              src="/public/images/history_icon/history-book-Freepik.png"
              style={{ width: "5rem", height: "5rem" }}
              alt=""
            />
          </div>
        </div>
      </aside>

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
      <div className="tasks__finished-tasks">
        <div className="tasks__score-title">Tasks Finished</div>
        <div>
          <img
            src="/public/images/finished_task_icon/quest-icon-library.com.jpg"
            width="100"
            height="100"
            alt=""
          />
        </div>
        <div className="tasks__score">{tasksCount}</div>
        <button className="tasks__reset-score" onClick={() => setTasksCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Tasks;
