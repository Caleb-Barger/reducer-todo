import React from 'react'

import { ListGroup } from 'reactstrap'
import Todo from './Todo'

const TodoList = props => {
    const { state, dispatch } = props
    return (
        <ListGroup>
            {state.todoList.map((todo, index) => {
                return (
                    <Todo key={`${todo}${index}`} todo={todo} dispatch={dispatch} />
                )
            })}
        </ListGroup>
    )
}

export default TodoList