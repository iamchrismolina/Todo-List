import "./tasksdone.scss";

type PropsType = {
  tasksCount: number;
  setTasksCount: React.Dispatch<React.SetStateAction<number>>;
};

const TasksDone = ({ tasksCount, setTasksCount }: PropsType) => {
  return (
    <>
      <div className="tasks__finished-tasks">
        <div className="tasks__score-title">Tasks Finished</div>
        <div>
          <img
            src="./images/finished-task-icon/finishedTask.jpg"
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
    </>
  );
};

export default TasksDone;
