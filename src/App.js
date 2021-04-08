import { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Don't starve",
            day: 'Cuma, 12:30',
            reminder: true,
        },
        {
            id: 2,
            title: 'Civilization VI',
            day: 'Cumartesi, 18:30',
            reminder: true,
        },
        {
            id: 3,
            title: 'Long Dark',
            day: 'Pazar, 20:30',
            reminder: false,
        },
    ]);

    return (
        <div className="container">
            <Header game="Civilization VI" />
            <Tasks tasks={tasks} />
        </div>
    );
}
