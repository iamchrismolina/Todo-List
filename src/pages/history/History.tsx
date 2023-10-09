import { useState, useEffect } from "react";
import "./history.scss";

type PropsType = {
  logs: Array<string>;
};

const History = ({ logs }: PropsType) => {
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
    </div>
  );
};

export default History;
