import React, {useState} from 'react';
import Todo from '../components/Todo';


const Form = () => {

{var numero}

    const [todo, setTodo]=useState({})
    const [todos, setTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])

    const handleChange2 = e => {numero=e.target.value}

    const handleChange = e => setTodo({[e.target.name]: numero + "- "+ e.target.value})


    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }
        setTodos([...todos,todo])   
    }
    
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }


    return (
        <>
        <form onSubmit={e=>e.preventDefault()}>
        
            <label>Cantidad</label><br />
            <input type="text" name="num" onChange={handleChange2}/>

            <label>Producto</label><br />
            <input type="text" name="todo" onChange={handleChange}/><br />
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
    )
}
export default Form