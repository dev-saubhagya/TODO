import Heading from "./components/Heading"
import Addtodo from "./components/Addtodo"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import initialTodoItems from "./components/Data/InitalTodoItem"

function App() {


  const [todoItem, setTodoItem] = useState(initialTodoItems)
  console.log(todoItem)
  const addTodoItems = (todoText, todoDate) => {
    setTodoItem(initialTodoItems => {
      return [...initialTodoItems, { id: todoText, todoText, todoDate }]
    })
  }
  const deleteTodoItems = (todoId) => {
    setTodoItem(initialTodoItems => {
      return initialTodoItems.filter(item => item.id !== todoId);
    })
  }
  return (
    <>
      <center>
        <Heading />
        <Addtodo addTodoItems={addTodoItems} />
        <TodoItems todoItem={todoItem} deleteTodoItems={deleteTodoItems} />
      </center>
    </>
  )
}

export default App
