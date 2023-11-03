const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const DELETE_TODO = 'rodos/DELETE_TODO';

export const addTodo = (payload) => {
    console.log(payload)
    return {
        type: ADD_TODO,
        payload,
    } 
};
export const toggleStatusTodo = (payload) => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    }
};
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
};

const todos = (state = initialState, action) => { 
    // 리듀서
    switch (action.type) {
        case ADD_TODO: 
            console.log(action)
            return [...state, action.payload];
        case TOGGLE_STATUS_TODO:
            return state.map((todo) => {
                if(todo.id === action.payload) {
                    return {...todo, isDone: !todo.isDone};
                }
                return todo;
            });
            case DELETE_TODO:
                return state.filter((todo) => {
                    return todo.id !== action.payload;
                });
                default:
                    return state;
    }
};

export default todos;
