export default function userReducer(state={
    age : 27,
    name : "Ali"
}, action) {
    switch (action.type) {
        case "CHANGE_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
    }
    return state
}