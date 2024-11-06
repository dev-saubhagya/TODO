import TodoItem from "./TodoItem"
function TodoItems({ todoItem, deleteTodoItems }) {

    return <>
        {todoItem.map(items => <TodoItem key={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate} deleteTodoItems={deleteTodoItems} />)}
    </>
}

export default TodoItems