import Task from "./Task";

function Tasks({ tasks, removeTask }) {
  return (
    <div className="taskMainDiv">
      <div>
        <h2 className="mainDivTitles"> Tasklar </h2>
      </div>

      <div className="taskDiv">
        {tasks.map((task, index) => {
          return <Task key={index} tasks={task} removeOneTask = {removeTask} />;
        })}
      </div>
    </div>
  );
}

export default Tasks;
