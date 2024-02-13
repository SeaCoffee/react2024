import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import {todosService} from "../../services/axiosService";

export const Todos = () => {

    const [todos, setTodos] = useState([])


    useEffect(() => {
            todosService.getAll().then(response => setTodos(response.data))
        },
        [])

    return (
        <div>
            {todos.map(todo =><Todo key={todo.id} todo ={todo}/>)}
        </div>
    )

}