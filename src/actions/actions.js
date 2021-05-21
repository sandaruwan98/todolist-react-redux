export const ADDTODOACTION = 'ADDTODOACTION'
export const addTodoAction = (text) => {
    return {
        type: ADDTODOACTION,
        payload: text
    }
}


export const DELETETODOACTION = 'DELETETODOACTION'
export const deleteTodoAction = (id) => {
    return {
        type: DELETETODOACTION,
        payload: id
    }
}

export const CHANGECOLOR_ACTION = 'CHANGECOLOR_ACTION'
export const changeColorAction = (id,color) => {
    return {
        type: CHANGECOLOR_ACTION,
        payload: {id,color}
    }
}

