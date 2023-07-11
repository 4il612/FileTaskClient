import { useState } from "react";

const TaskCard = ({ id, status }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="taskCard">
      <div className="taskCard__id">{id}</div>
      <div className="taskCard__status">{status}</div>

      <button
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        open
      </button>
      {isCollapsed && <div className="taskCard__collapse">'asd'</div>}
    </div>
  );
};

export default TaskCard;
