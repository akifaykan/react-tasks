import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <ul className="tasks">
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </ul>
    );
};

export default Tasks;
