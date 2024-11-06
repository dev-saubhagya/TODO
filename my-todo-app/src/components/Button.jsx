
function Button({ btnType, btnText, handler }) {
    if (btnType === 'success')
        return <button className="btn btn-success my-button" onClick={handler}>{btnText}</button>;
    else if (btnType === 'danger')
        return <button className="btn btn-danger my-button " onClick={handler}>{btnText}</button>;
    else {
        return <button className="btn btn-primary my-button" onClick={handler}>{btnText}</button>
    }
}

export default Button