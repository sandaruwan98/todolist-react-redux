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

