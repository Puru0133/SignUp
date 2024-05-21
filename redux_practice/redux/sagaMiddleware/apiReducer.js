const initialState = {
    users: []
}

const myReducerAPI = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHED API DATA": {
            return {
                ...state,
                users: action.users
            }
        } default: return state
    }
}

export default myReducerAPI