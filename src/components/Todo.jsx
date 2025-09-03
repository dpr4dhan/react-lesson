import {useState} from "react";

export default function Todo(){
    let [currentTask, setCurrentTask] = useState([]);
    let [tasks, setTasks] = useState('');

    function addTask(){
        setTasks([...tasks, currentTask]);
        setCurrentTask('');
    }

    return (
        <div>
            <input type="text" onChange={(e) => {setCurrentTask(e.target.value)} } value={currentTask}/>
            <button onClick={addTask}>Add Task</button>
            <h4>Task List</h4>
            {
                tasks.length >0 ?
                    <ul>
                        {tasks.map((task, idx) => (
                            <li key={idx}>{task}</li>
                        ))}
                    </ul>
                    :
                    <p>No tasks found.</p>
            }

        </div>
    )
}