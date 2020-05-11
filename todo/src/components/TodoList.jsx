import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const { state, dispatch } = props
    return (
        <div>
            {state.todoList.map((todo, index) => {
                return (
                    <Todo key={`${todo}${index}`} todo={todo} dispatch={dispatch} />
                )
            })}
        </div>
    )
}

export default TodoList