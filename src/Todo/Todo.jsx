import { useState } from 'react';
import './Todo.css';
import { Todoform } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';


export const Todo = () => {

    const [task, setTask] = useState(()=> getLocalStorageTodoData())
  
    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue

        // check if the input field is empty or not
        if(!content) return;

        // check if the data is already exists or not
        // if(task.includes(content)) return;
        const ifTodoContentMatched = task.find((currTask)=> currTask.content === content)
        if(ifTodoContentMatched) return
    
        setTask((prevTask)=>[...prevTask, {id, content, checked}])

    }

    // add data to local storage
    setLocalStorageTodoData(task)


    // delete todo

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((currTask)=> currTask.content != value )
        setTask(updatedTask)
    }

    // clear all todo

    const handleClearTodoData = () => {
        setTask([])
    }

    // checked todo 
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((currTask)=>{
            if(currTask.content === content){
                return {...currTask, checked: !currTask.checked}
            } else{
                return currTask;
            }
        })
        setTask(updatedTask)
    }
    

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>
            <Todoform onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask)=>{
                            return <TodoList key={currTask.id} data={currTask.content} checked={currTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo= {handleCheckedTodo}/>
                        })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}