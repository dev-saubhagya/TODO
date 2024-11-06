
import Button from "./Button"
function TodoItem({ id, todoText, todoDate, deleteTodoItems }) {

    return (
        <div className="container">
            <div className="row my-row">
                <div className="col-5 text-truncate">
                    {todoText}
                </div>
                <div className="col-3">
                    {todoDate}
                </div>
                <div className="col-2"><Button btnType='danger' btnText='Delete' handler={() => deleteTodoItems(id)} /></div>

            </div>
        </div>
    )
}

export default TodoItem;