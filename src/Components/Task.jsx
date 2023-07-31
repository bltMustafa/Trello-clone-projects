import { useState } from "react";
import "../App.css";

function Task ({ tasks , removeOneTask }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="task">
      <div className="taskTitle">
      <button className="taskBtn" onClick={handleClick}>{tasks.title}</button>
      {isClicked && <p>{tasks.content}</p>}
      <button className="taskDeleteBtn" onClick={() => removeOneTask(tasks.id)}> Sil </button>
    </div>
    </div>
  );
}

export default Task