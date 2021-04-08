const Task = ({ task }) => {
    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.day}</p>
        </li>
    );
};

export default Task;
