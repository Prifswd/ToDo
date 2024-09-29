import { FaCheckCircle } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

export const TodoList = ({data, onHandleDeleteTodo, checked, onHandleCheckedTodo}) =>{
    return (
        <li className='todo-item'>
                                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                                <button className='check-btn' onClick={()=> onHandleCheckedTodo(data)}><FaCheckCircle /></button>
                                <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
                            </li>
    )
}