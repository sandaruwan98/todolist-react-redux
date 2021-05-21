import React from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as TimesSolid } from './todos/times-solid.svg'

import { availableColors, capitalize } from './filters/colors'

import {deleteTodoAction} from '../actions/actions'


// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ todo }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const { id,text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
   
  }

  const onDelete = () => {
    dispatch(deleteTodoAction(id))
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
