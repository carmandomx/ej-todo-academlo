import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoListArray}) => {

    const componentMap = todoListArray.map((value, i) => (<TodoItem key={i} value={value} />)) // <--- 
    return (
        <div>
            {componentMap}
        </div>
    )
}

export default TodoList;