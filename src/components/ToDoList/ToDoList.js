import { useState } from 'react'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoData from './ToDoForm/ToDoData/ToDoData'

export default function ToDoList() {

    const [todos, setToDos] = useState([]);
    const initialFormState = { title: '', completed: false };
    const [newToDo, setNewToDo] = useState(initialFormState);

    function handleChange(event) {
        setNewToDo({...newToDo, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setToDos([...todos, newToDo]);
        setNewToDo(initialFormState);
    }

    function updateToDo(title) {
        const tempList = [...todos];
        const idx = tempList.findIndex((item) => item.title === title)
        const tempToDo = tempList.splice(idx, 1)[0]
        tempToDo.completed = true;
        setToDos([...tempList, tempToDo])
    }

    function removeToDo(title) {
        const tempList = [...todos]
        const idx = tempList.findIndex((item) => item.title === title)
        tempList.splice(idx, 1)
        setToDos(tempList)
    }
    return (
        <div className="to-do-container">
            <h2>Hello from ToDoList</h2>
            <ToDoForm handleChange={handleChange} handleSubmit={handleSubmit} updateToDo={updateToDo} removeToDo={removeToDo} newToDo={newToDo} />
            <div className="list-wrapper">
                <h2>To Do Items:</h2>
                    <ToDoData todos={todos.filter((item) => !item.completed)} clickHandler={updateToDo} />
                    <h2>Completed Items:</h2>
                    <ToDoData todos={todos.filter((item) => item.completed)} clickHandler={removeToDo} />
            </div>
        </div>
    )
}