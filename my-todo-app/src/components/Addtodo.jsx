
import { useRef } from "react"
import Button from "./Button"
function Addtodo({ addTodoItems }) {
    const todoTextInput = useRef()
    const todoDateInput = useRef()
    const addHandler = () => {
        const todoText = todoTextInput.current.value;
        const todoDate = todoDateInput.current.value;
        todoTextInput.current.value = '';
        todoDateInput.current.value = '';
        addTodoItems(todoText, todoDate)
    }
    return (
        <div className="container text-center">

            <div className="row my-row">
                <div className="col-5"><input type="text" className="form-control" placeholder="Enter Todo here" ref={todoTextInput}></input></div>
                <div className="col-3"><input type="date" className="form-control" ref={todoDateInput}></input></div>
                <div className="col-2" ><Button btnType='success' btnText='Add' handler={addHandler} /></div>

            </div>
        </div>
    )
}

export default Addtodo