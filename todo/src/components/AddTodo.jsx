import React from 'react'
import {
    InputGroup,
    InputGroupAddon,
    Button,
    Input
} from 'reactstrap'

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
            <InputGroup>
                <Input
                    className="item-bar"
                    value={state.currentText}
                    onChange={onChangeHandler}
                />
                <InputGroupAddon addonType="prepend">
                    <Button outline onClick={onClickHandler}>add todo</Button>
                </InputGroupAddon>
                <InputGroupAddon addonType="prepend">
                    <Button outline onClick={() => dispatch({ type: "PURGE_COMPLETED" })}>remove completed</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default AddTodo