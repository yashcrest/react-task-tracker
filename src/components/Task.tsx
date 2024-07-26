import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}{" "}
        <AiFillDelete
          onClick={() => onDelete(task.id)}
          style={{
            color: "#dc3545",
            cursor: "pointer",
            minWidth: "30px",
            minHeight: "20px",
          }}
        />{" "}
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
