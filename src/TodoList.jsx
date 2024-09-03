import { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(e){
    setNewTask(e.target.value)
  }
  function addTask (){
    if(newTask.trim() !== ""){
        setTasks([...tasks,newTask])
        setNewTask("")
    }
  }
  function deleteTask(index){
    const UpdatedTasks = tasks.filter((_,i)=> i !== index)
    setTasks(UpdatedTasks)
  }
  function upTask(index){
    if(index >0){
        const UpdatedTasks = [...tasks];
        [UpdatedTasks[index], UpdatedTasks[index - 1]] = [UpdatedTasks[index - 1], UpdatedTasks[index]];
        setTasks(UpdatedTasks);
    }
  }
  function downTask(index){
    if(index < tasks.length - 1){
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index], UpdatedTasks[index + 1]] = [UpdatedTasks[index + 1], UpdatedTasks[index]];
      setTasks(UpdatedTasks);
    }
  }
  
  return (
    <div className="to-do-app">
      <h1 className="title">To Do List</h1>
      <div>
        <input type="text" placeholder="Add your task here" value={newTask} onChange={handleNewTask} />
        <button className="add-btn" onClick={addTask}><i class="fa-solid fa-plus"></i></button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
           <span className="text"> {task} </span>
            <button onClick={()=> deleteTask(index)}><i class="fa-regular fa-trash-can"></i></button> 
            <button onClick={()=> upTask(index)}><i class="fa-solid fa-arrow-up"></i></button>
            <button onClick={()=> downTask(index)}><i class="fa-solid fa-arrow-down"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
