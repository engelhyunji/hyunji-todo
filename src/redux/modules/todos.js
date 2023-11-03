const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const DELETE_TODO = 'rodos/DELETE_TODO';

// 인자로 payload
// return 은 type, payload
// 함수들을 add Todo 액션 크리에이터(action create)로 만들어주기때문에 type, payload 객체를 뜻.
// type 이 다 다르고 문자열로 지정, 인자는 다 똑같이 payload
// 객체를 넘겨줄 때 편리하기위해 함수로 생성
// add Todo 액션 크리에이터(action create)함수에 newTodo 를 전달
export const addTodo = (payload) => {
    console.log(payload)
    return {
        type: ADD_TODO,
        payload,
    } // payload 키에 newTodo가 전달
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

const todos = (state = initialState, action) => { //2번째 인자(action)로 액션 객체 dispatch로 전달한 객체가 넘어온다.
    // 리듀서
    switch (action.type) {
        case ADD_TODO: // newTodo 추가할 수 있게 코드
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