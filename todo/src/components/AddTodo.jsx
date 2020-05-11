import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CURRENT_VALUE":
            return {
                ...state,
                currentText: action.payload
            }
        case "ADD_VALUE":
            const todoListCopy = [...state.todoList]
            todoListCopy.push(state.currentText)
            return {
                ...state,
                todoList: [...todoListCopy]
            }
        default:
            return state
    }
}

const initalState = {
    currentText: "",
    todoList: [],
}

const AddTodo = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    const onChangeHandler = e => {
        dispatch({ type: "UPDATE_CURRENT_VALUE", payload: e.target.value })
    }

    const onClickHandler = e => {
        dispatch({ type: "ADD_VALUE" })
    }

    return (
        <div>
            <input
                value={state.currentText}
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>add todo</button>
        </div>
    )
}

export default AddTodo