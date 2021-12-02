import React, {useState} from "react";
import PropTypes from 'prop-types'

function useInputValue(defaultValue ='') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function addTodo({onCreate}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const input = useInputValue('')


    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
            // setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

addTodo.propTypes = {
    onCreate:PropTypes.func.isRequired
}

export default addTodo
