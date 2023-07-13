import { useState } from "react";

const TaskCard = ({ id, task, status, sourceImage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="taskCard" onClick={() => setIsCollapsed(!isCollapsed)}>
      <div className="taskCard__main">
        <div className="taskCard__id">{id}</div>
        <div className="taskCard__task">{task}</div>
        <div className="taskCard__status">{status}</div>
      </div>
      {isCollapsed && (
        <div className="taskCard__collapse">
          <div className="taskCard__previousWrapper">
            <div className="taskCard__previousLabel">Source image</div>
            <img
              className="taskCard__previousImage"
              alt="kek"
              src={sourceImage}
            />
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
