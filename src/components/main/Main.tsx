import Tasks from "../../pages/tasks/Tasks.tsx";
import History from "../../pages/history/History.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";
import "./main.scss";
import { useState } from "react";
// import useLocalStorage from "use-local-storage";

const Main = () => {
  const [viewTasks, setViewTasks] = useState<boolean>(true);
  const logEntries = [
    "2023-10-10 09:15:00 INFO: Task 'Buy groceries' created by user.",
    "2023-10-10 10:30:00 INFO: Task 'Buy groceries' marked as completed by user.",
    "2023-10-10 11:45:00 INFO: Task 'Finish report' deleted by user.",
  ];

  const [logs, setLogs] = useState(logEntries);

  const pageContent = viewTasks ? (
    <Tasks setLogs={setLogs} />
  ) : (
    <History logs={logs} />
  );

  const content = (
    <main>
      <Sidebar setViewTasks={setViewTasks} />
      {pageContent}
    </main>
  );

  return content;
};

export default Main;
