export default function ToDoItem ({ item, idx, clickHandler }) {
    return (
        <li>
            <span className={item.completed && 'complete'}>{item.title}</span>
            {item.completed ? (
                <button className="to-do-button" onClick={() => clickHandler(item.title)}>❌</button>
            ) : (
                <button className="to-do-button" onClick={() => clickHandler(item.title)}>✅</button>
            )}
        </li>
    )
}