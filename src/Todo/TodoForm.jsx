import { useState } from "react"

export const Todoform = ({onAddTodo}) =>{

    const [inputValue, setInputvalue] = useState({})

    const handleInputChange = (value) =>{
        setInputvalue({id: value, content: value, checked: false})
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        onAddTodo(inputValue)
        setInputvalue({id: "", content: "", checked: false})
    }

    return (
        <section className='form'>
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className='todo-input' autoComplete='off' value={inputValue.content} onChange={(event)=> handleInputChange(event.target.value)}/>
            </div>
            <div>
                <button type='submit' className='todo-btn'>Add task</button>
            </div>
        </form>
    </section> 
    )
}