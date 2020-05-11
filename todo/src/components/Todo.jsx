import React from 'react'
import {
    ListGroupItem,
    ListGroupItemText
} from 'reactstrap'

const Todo = props => {
    const { todo, dispatch } = props

    const onClickHandler = e => {
        e.preventDefault()
        dispatch({ type: "TOGGLE_ITEM", payload: todo.name })
    }
    return (
        <ListGroupItem className="list-item">
            <ListGroupItemText
                onClick={(onClickHandler)}
                className={todo.toggled ? 'todo-text toggled' : 'todo-text'}
            >{todo.name}</ListGroupItemText>
        </ListGroupItem>
    )
}

export default Todo