import { useEffect, useRef } from "react";

const TaskItem = ({ onAddTask }) => {
  const task = useRef(null);
  const summary = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTask = task.current.value;
    const enteredSummery = summary.current.value;
   
    e.target.reset();
    onAddTask(enteredTask, enteredSummery);
  };

 
  useEffect(() => {
    task.current.focus();
  }, []);

  return (
    <>
    
      <form className="task-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="task">Your Task</label>
          <input type="text" id="task" ref={task} />
        </p>
        <p>
          <label htmlFor="summary">Short summary</label>
          <input type="text" id="summary" ref={summary} />
        </p>
        <p>
          <button>Add Task</button>
        </p>
      </form>
    </>
  );
};

export default TaskItem;
