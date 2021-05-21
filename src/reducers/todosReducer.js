import { ADDTODOACTION , DELETETODOACTION } from '../actions/actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDTODOACTION:
        return  [...state,{id:state.length+Math.random(),text : payload,color : 'red',completed:false} ]

    case DELETETODOACTION:
        return  state.filter(todo => todo.id !== payload)

    default:
        return state
    }
}

