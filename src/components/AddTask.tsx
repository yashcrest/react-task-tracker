import { useEffect, useState } from "react";
import { ITask } from "./types";

type AddTaskProps = {
  onAdd: (task: ITask) => void;
};
const AddTask = ({ onAdd }: AddTaskProps) => {
  //   const [id, setId] = useState<number>(0);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!text) {
      setShowError(true);
      return;
    }
    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <form className="add-form form-control" onSubmit={onSubmit}>
      <div>
        <label htmlFor="" className="form-label">
          Task
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
          className="form-control"
        />
        {showError && <p className="error-msg">Please add a Task</p>}
      </div>
      <div>
        <label htmlFor="" className="form-label">
          Day and Time
        </label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add  day and time"
          className="form-control"
        />
      </div>
      <div className="form-control-check py-3">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={text}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block btn-dark"
      />
    </form>
  );
};

export default AddTask;
