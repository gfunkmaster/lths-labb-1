import Task from "./Task";

const TaskItemList = ({tasks, onDelete}) => {

    return (
    <>
  <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task id={task.id} title={task.title} onDelete={onDelete} desc={task.description} />
                    
                  
                </li>
            ))}

        </ul>
    
    </>
    )

};

export default TaskItemList;