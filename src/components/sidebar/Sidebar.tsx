import "./sidebar.scss";

type PropsType = {
  setViewTasks: React.Dispatch<React.SetStateAction<boolean>>;
  highlight: boolean;
};

const Sidebar = ({ setViewTasks, highlight }: PropsType) => {
  return (
    <aside className="tasks__sidebar">
      <span className="tasks__task-category">Tasks</span>

      <div className="tasks__task-list">
        <div
          className={`tasks__highlight ${
            highlight ? "tasks__highlighter" : ""
          }`}
        ></div>
        <div className="tasks__icon-container">
          <img
            className="tasks__task-icon"
            src="./images/task-icon/task.png"
            style={{ width: "5rem", height: "5rem" }}
            alt=""
            onClick={() => {
              setViewTasks(true);
            }}
          />
        </div>
      </div>
      <span className="tasks__history-category">History</span>

      <div className="tasks__task-history">
        <div
          className={`tasks__highlight ${
            highlight ? "" : "tasks__highlighter"
          }`}
        ></div>
        <div
          className="tasks__icon-container"
          onClick={() => {
            setViewTasks(false);
          }}
        >
          <img
            className="tasks__history-icon"
            src="./images/history-icon/history.png"
            style={{ width: "5rem", height: "5rem" }}
            alt=""
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
