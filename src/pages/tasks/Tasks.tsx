import "./Tasks.scss";
import Trashcan from "../../components/Trashcan.tsx";
import AddTask from "../../components/addtask/AddTask.tsx";
import Checkbox from "../../components/checkbox/Checkbox.tsx";

const Tasks = () => {
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
          id="addtask"
        />
        <span className="tasks__add-task">
          <AddTask />
        </span>
        <div className="tasks__todos">
          <div className="tasks__todo">
            <div className="tasks__content">
              <Checkbox />
              <span>Task Lists</span>
            </div>
            <Trashcan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
