import './App.css';
import {useState} from "react";

const App = () => {
    const [tower, setTower] = useState('A');
    const [floor, setFloor] = useState(3);
    const [room, setRoom] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');

    const handleTowerChange = (event) => {
        setTower(event.target.value);
    };

    const handleFloorChange = (event) => {
        setFloor(event.target.value);
    };

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    };

    const handleForm = (event) => {
        event.preventDefault();
        const formData = {
            tower: tower,
            floor: floor,
            room: room,
            date: date,
            time: time,
            comments: comments
        };

        const jsonFormData = JSON.stringify(formData);

        console.log(jsonFormData);

        setTower('A');
        setFloor(3);
        setRoom(1);
        setDate('');
        setTime('');
        setComments('');

    };

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Бронирование переговорной</h1>
        <form onSubmit={handleForm} className="form">
            <div className="selects">
            <label className="label">
                <span className="description">Башня:</span>
                <select className="select" value={tower} onChange={handleTowerChange}>
                    <option value="A">Башня A</option>
                    <option value="B">Башня B</option>
                </select>
            </label>

            <label className="label">
                <span className="description">Этаж:</span>
                <select className="select" value={floor} onChange={handleFloorChange}>
                    {Array.from({length: 25}).map((_, index) => (
                    <option key={index} value={index + 3}>Этаж {index + 3}</option>
                    ))}
                </select>
            </label>

            <label className="label">
                <span className="description">Переговорная №:</span>
                <select className="select" value={room} onChange={handleRoomChange}>
                    {Array.from({length: 10}).map((_, index) => (
                        <option key={index} value={index + 1}>Переговорная {index + 1}</option>
                    ))}
                </select>
            </label>
            </div>

            <label className="label">
                <span className="description">Дата:</span>
                <input className="input" type="date" value={date} onChange={handleDateChange}/>
            </label>

            <label className="label">
                <span className="description">Время:</span>
                <input className="input" type="time" value={time} onChange={handleTimeChange}/>
            </label>

            <label className="label">
                <span className="description">Комментарий:</span>
                <textarea className="textarea" value={comments} onChange={handleCommentsChange}/>
            </label>

            <div className="buttons">
                <button className="button" type="submit">Отправить</button>
                <button className="button" type="button" onClick={() => {
                    setTower('A');
                    setFloor(3);
                    setRoom(1);
                    setDate('');
                    setTime('');
                    setComments('');
                }}>Очистить</button>
            </div>
        </form>
      </div>
    </div>
  )
}
export default App;
