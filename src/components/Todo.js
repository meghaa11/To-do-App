import React, { useState } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import TodoForm from './TodoForm';


function Todo({tasks, completeTask, removeTask, updateTask}) {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTask(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
      }
    
    return tasks.map( (task, index) => {
        return (
        <div 
        className= {task.isComplete? 'todo-row-complete' : 'todo-row'} key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}> 
                <h3>{task.text}</h3>
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={() => removeTask(task.id)}
                className='delete-icon'
                />
                <MdEdit 
                onClick={() => setEdit({id: task.id, value:task.text})}
                className='edit-icon'
                />
            </div>

        </div>
        )
    })
}

export default Todo