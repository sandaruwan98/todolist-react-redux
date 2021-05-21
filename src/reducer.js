import { combineReducers } from 'redux'

import todosReducer from './reducers/todosSlice'
import filtersReducer from './reducers/filtersSlice'

const reducers = {
  todos: todosReducer,
  filters: filtersReducer,
}


const rootReducer = combineReducers(reducers)

export default rootReducer
