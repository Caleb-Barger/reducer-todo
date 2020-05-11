import React from 'react'

const Todo = props => {
    const { todo, dispatch } = props

    const onClickHandler = e => {
        e.preventDefault()
        dispatch({ type: "TOGGLE_ITEM", payload: todo.name })
    }
    return (
        <h1
            onClick={(onClickHandler)}
            className={todo.toggled ? 'todoItem toggled' : 'todoItem'}
        >{todo.name}</h1>
    )
}

export default Todo