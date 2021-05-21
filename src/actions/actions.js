const AddTodoAction = 'AddTodoAction'
const addTodoAction = (text) => {
    return {
        type: AddTodoAction,
        payload: text
    }
}