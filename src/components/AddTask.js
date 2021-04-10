import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Oyun adını yazın');
            return;
        }

        onAdd({ title, day, reminder });

        setTitle('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className="form on" onSubmit={onSubmit}>
            <div className="form-control flex">
                <input
                    type="text"
                    placeholder="Oyun Adı"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Gün ve Saat"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control">
                <input
                    id="checklabel"
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
                <label htmlFor="checklabel">Listeyi seç</label>
            </div>
            <div className="form-control">
                <input className="btn" type="submit" value="Ekle" />
            </div>
        </form>
    );
};

export default AddTask;
