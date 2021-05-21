import { ADDTODOACTION } from '../actions/actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDTODOACTION:
        return  [...state,{id:state.length+1,text : payload,color : 'red',completed:false} ]

    default:
        return state
    }
}

