import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <li className="flex">
            <div
                className={`df${task.reminder ? ' reminder' : ''}`}
                onClick={() => onToggle(task.id)}
            >
                <div className="head">
                    <h3>{task.title}</h3>
                    <p>{task.day}</p>
                    {/* <ul className="genres">
                        {task.genres.map((x) => (
                            <li>{x}</li>
                        ))}
                    </ul> */}
                </div>
            </div>
            <a onClick={() => onDelete(task.id)}>
                <FaTimes />
            </a>
        </li>
    );
};

export default Task;
