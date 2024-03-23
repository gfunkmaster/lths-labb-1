const Task = ({ title, desc, onDelete, id }) => {
  return (
    <>
      <article>
        <div className="task-item">
          <h2 className="title">{title}</h2>
          <p className="description"> {desc}</p>
        </div>
        <button className="task-item actions" onClick={() => onDelete(id)}>Delete</button>
      </article>
    </>
  );
};

export default Task;
