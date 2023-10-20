import "./logs.scss";

type LogsType = {
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
};

const Logs = ({ setLogs }: LogsType) => {
  return (
    <div className="logs">
      <div className="logs__container">
        <span className="logs__title">Logs</span>
        <img
          src="/public/images/logs_logo/logs.png"
          width="120"
          height="120"
          alt="three logs with a flower on top - which implies Logs of the user"
        />
      </div>
      <button className="logs__clear-logs" onClick={() => setLogs([])}>
        Clear
      </button>
    </div>
  );
};

export default Logs;
