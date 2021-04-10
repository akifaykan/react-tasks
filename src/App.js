import './css/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
    const [showTask, setShowTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const gamesServer = await fetchTasks();
            setTasks(gamesServer);
        };

        getGames();
    }, []);

    //Fetch Games data
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        //const result = data.filter((epic) => epic.store === 'Epic');

        return data;
    };

    //Fetch Game data
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    // Add task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    };

    // Delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });

        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        });

        const data = await res.json();

        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task))
        );
    };

    return (
        <Router>
            <div className="container">
                <Header onAdd={() => setShowTask(!showTask)} showAdd={showTask} />
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <>
                            {showTask && <AddTask onAdd={addTask} />}
                            {tasks.length > 0 ? (
                                <Tasks
                                    tasks={tasks}
                                    onDelete={deleteTask}
                                    onToggle={toggleReminder}
                                />
                            ) : (
                                <div className="tasks">Oyun listesi boş</div>
                            )}
                        </>
                    )}
                />
                <Route path="/hakkimizda" component={About} />
                <Footer />
            </div>
        </Router>
    );
}
