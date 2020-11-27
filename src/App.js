import React, {useState} from 'react';
import './App.css'

const Todo = (props) => {
  return (
    <div style={{textDecoration: props.todo.completato ? 'line-through' : ''}} className="todo">
      {props.todo.name}
      <div>
        <button className="btn-todo" onClick={() => props.completaTodo(props.index)}>
          Completa
        </button>
      </div>
    </div>
  )
};

// Form component
const Form = (props) => {
    const [value, setValue] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim() === '') {
        alert('scrivi qualcosa da aggiungere alla lista')
        return 
      }
      props.submit(value)
      setValue('')
    }

    const onChangeText = (e) => {
      setValue(e.target.value)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={value} placeholder="aggiugni todo" onChange={onChangeText}/>
      </form>
    )
};

// App component
const App = () => { 
  const [todos, setTodos] = useState(
    [
      {name: 'Imparare React', completato: false},
      {name: 'Imparare gli state', completato: false},
      {name: 'Imparare i component', completato: true},
    ]
  );
     
  const addTodo = (todo) => {
    const newTodos = [...todos, {name: todo}]
    setTodos(newTodos)
  }

  const completaTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completato = true;
    setTodos(newTodos)
  } 

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todo key={index} todo={item} index={index} completaTodo={completaTodo}/>
        ))}
        <Form submit={addTodo} />
      </div>
    </div>
  )
}


export default App;

