import React from 'react'

const AddTodo = props => {
    const { state, dispatch } = props

    const onChangeHandler = e => {
        dispatch({ type: "UPDATE_CURRENT_TEXT", payload: e.target.value })
    }

    const onClickHandler = e => {
        dispatch({ type: "ADD_VALUE" })
        dispatch({ type: "RESET_CURRENT_TEXT" })
    }

    return (
        <div>
            <input
                value={state.currentText}
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>add todo</button>
            <button onClick={() => dispatch({ type: "PURGE_COMPLETED" })}>remove completed</button>
        </div>
    )
}

export default AddTodo