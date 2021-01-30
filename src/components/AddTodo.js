import React, { useState } from 'react'

const AddTodo = ({handleAddTodo}) => {
    const [state, setState] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setState(value); 
    }

    const handleClick = () => {
        handleAddTodo(state);
        setState("");
        console.log(state);
    }

    return (
        <div>

            <input value={state} onChange={handleChange} />

            <button onClick={handleClick}>Add task</button>
        </div>
    )
}

export default AddTodo;