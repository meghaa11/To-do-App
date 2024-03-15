import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    
    const [tasks,setTasks] = useState([]);

    const addTask = (task) => {
        if(!task.text || /^\s*$/.test(task.text))
            return

        const newTasks = [task, ...tasks];
        setTasks(newTasks);
        console.log(newTasks);
    }

    const updateTask = (taskId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
      };
    

    const completeTask = (id) => {
        let updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const removeTask = id => {
        const removedArr = [...tasks].filter(task => task.id !== id);
    
        setTasks(removedArr);
    };

  
    return (
        <div className='todo-app'>
            <div className='header'>
                <h1>What's the plan for today?</h1>
            </div>
            <TodoForm onSubmit={addTask}/>
            <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
  )
}

export default TodoList