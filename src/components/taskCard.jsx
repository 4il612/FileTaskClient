import { useState } from "react";

const TaskCard = ({ id, task, status, sourceImage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="taskCard">
      <div className="taskCard__main">
        <div className="taskCard__id">{id}</div>
        <div className="taskCard__task">{task}</div>
        <div className="taskCard__status">{status}</div>

        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          open
        </button>
      </div>
      {isCollapsed && (
        <div className="taskCard__collapse">
          <div className="taskCard__previousWrapper">
            <div className="taskCard__previousLabel">Source image</div>
            <img className="taskCard__previousImage" alt="kek" src="img1.jpg" />
          </div>
          <button className="taskCard__downloadBTN">
            DOWNLOAD PROCESSED IMAGE
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
