import Tasks from "../../pages/tasks/Tasks.tsx";
import History from "../../pages/history/History.tsx";
import Sidebar from "../sidebar/Sidebar.tsx";
import useLocalStorage from "use-local-storage";
import { useState, useEffect } from "react";
import "./main.scss";

const Main = () => {
  const [url, setUrl] = useLocalStorage("urlDeserialized", true);
  const [viewTasks, setViewTasks] = useState<boolean>(url);
  const [highlight, setHighlight] = useLocalStorage(
    "highlightDeserialized",
    true
  );
  const [logs, setLogs] = useLocalStorage("logsDeserialized", []);

  // const pageToLoad = `${viewTasks ? "/tasks" : "/history"}`;
  const pageTitle = `${viewTasks ? "Tasks" : "History"}`;

  useEffect(() => {
    // history.pushState(null, (document.title = pageTitle), pageToLoad);
    history.pushState(null, (document.title = pageTitle), "/Todo-Lists/");
    setHighlight(viewTasks);
    setUrl(viewTasks);
  }, [viewTasks]);

  const pageContent = viewTasks ? (
    <Tasks setLogs={setLogs} />
  ) : (
    <History logs={logs} setLogs={setLogs} />
  );

  const content = (
    <main>
      <Sidebar setViewTasks={setViewTasks} highlight={highlight} />
      {pageContent}
    </main>
  );

  return content;
};

export default Main;
