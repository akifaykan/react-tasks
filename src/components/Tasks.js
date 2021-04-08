import Task from './Task';

const Tasks = ({ tasks }) => {
    return (
        <ul className="tasks">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default Tasks;
