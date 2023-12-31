// import { useState, useEffect } from "react";
import Logs from "../../components/reportlogs/Logs.tsx";
import "./history.scss";

type PropsType = {
  logs: Array<string>;
  // setLogs: React.Dispatch<React.SetStateAction<string[]>>;
  setLogs: any;
};

const History = ({ logs, setLogs }: PropsType) => {
  return (
    <div className="history">
      <div className="history__logs">
        {logs.map((log, idx) => (
          <div key={idx} className="history__log">
            <div className="history__content">
              <span>{log}</span>
            </div>
          </div>
        ))}
      </div>
      <Logs setLogs={setLogs} />
    </div>
  );
};

export default History;
