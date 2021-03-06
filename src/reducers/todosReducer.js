import { ADDTODOACTION , DELETETODOACTION ,CHANGECOLOR_ACTION ,COMPLETETODO_ACTION  } from '../actions/actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDTODOACTION:
        return  [...state,{id:state.length+Math.random(),text : payload,color : 'red',completed:false} ]

    case DELETETODOACTION:
        return  state.filter(todo => todo.id !== payload)
    case CHANGECOLOR_ACTION:
        return  state.map(
            todo =>{
                if (todo.id !== payload.id) {
                    return todo
                }

                return {
                    ...todo,
                    color:payload.color
                }
            }
        );

    case COMPLETETODO_ACTION:
        return  state.map(
            todo =>{
                if (todo.id !== payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        );

    default:
        return state
    }
}

