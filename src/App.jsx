import { useEffect, useState } from "react";
import Tasks from "./Components/Tasks";
import Loading from "./Components/Loading";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3004/tasks");
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = (id) => {
    const afterDeletedTask = tasks.filter((task) => task.id !== id)
    setTasks(afterDeletedTask);
  }

  return (
    <div>
      {loading ? (<Loading />) : (
        <>
          {tasks.length === 0  ? (
            <div className="refreshDiv">
              <h2> Taskları Hallettiğin İçin Teşekkürlerr !  </h2>
              <button className="taskRefreshBtn" onClick={() => {
                fetchTasks();
              }}> Taskları Yenile  </button>
            </div>
          ) : (
            <Tasks tasks={tasks} removeTask={deleteTask} />
          )}
        </>
      )  }
    </div>
  )
}

export default App;
