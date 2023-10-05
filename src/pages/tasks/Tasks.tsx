import { useState } from "react";

import "./Tasks.scss";
import Trashcan from "../../components/trashcan/Trashcan.tsx";
import AddTask from "../../components/addtask/AddTask.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState(["DK", "Chris", "Molina"]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (inputValue) => {
    if (inputValue) {
      console.log(taskList);
      const updatedTaskList = [...taskList, inputValue];
      setTaskList(updatedTaskList);
      setInputValue("");
      console.log(taskList);
    }
  };

  const deleteTask = (taskIdx) => {
    const updatedTaskList = taskList.filter((task, i) => i !== taskIdx);
    setTaskList(updatedTaskList);
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
        {/*         
                Only if you need to pass a value = anonymous function call within onClick={}

          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        */}
        <span className="tasks__add-task" onClick={() => addTask(inputValue)}>
          <AddTask />
        </span>
        <div className="tasks__todos">
          {taskList.map((task, index) => (
            <div key={index} className="tasks__todo">
              <div className="tasks__content">
                <Checkbox id={`cbtest-${index}`} />
                <span>{task}</span>
              </div>
              <div onClick={() => deleteTask(index)}>
                <Trashcan />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
