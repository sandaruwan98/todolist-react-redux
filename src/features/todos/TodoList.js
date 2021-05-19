import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'


const TodoList = () => {

 

  return <ul className="todo-list">{<TodoListItem key={todoId} id={todoId} />}</ul>
}

export default TodoList
