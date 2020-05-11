const reducer = (state, action) => {
    const todoListCopy = [...state.todoList]
    switch (action.type) {
        case "UPDATE_CURRENT_TEXT":
            return {
                ...state,
                currentText: action.payload
            }
        case "ADD_VALUE":
            todoListCopy.push({
                name: state.currentText,
                toggled: false
            })
            return {
                ...state,
                todoList: [...todoListCopy]
            }
        case "RESET_CURRENT_TEXT":
            return {
                ...state,
                currentText: ""
            }
        case "TOGGLE_ITEM":
            todoListCopy.map(todo => {
                if (todo.name === action.payload) {
                    todo.toggled = !todo.toggled
                    console.log(todo)
                }
            })
            return {
                ...state,
                todoList: [...todoListCopy]
            }
        case "PURGE_COMPLETED":
            const unCompletedItems = todoListCopy.filter(todo => todo.toggled === false)
            return {
                ...state,
                todoList: [...unCompletedItems]
            }

        default:
            return state
    }
}

export default reducer