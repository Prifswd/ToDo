export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem("reactTodo")
        if(!rawTodos) return []
        return JSON.parse(rawTodos)
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem("reactTodo", JSON.stringify(task))
}