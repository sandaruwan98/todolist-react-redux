export const ADDTODOACTION = 'ADDTODOACTION'
export const addTodoAction = (text) => {
    return {
        type: ADDTODOACTION,
        payload: text
    }
}

