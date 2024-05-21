const initialState = {
    data: [],
    isLoading: false,
    isError: false
}


const apiDataReducer = (state = initialState, action) => {
    // console.log("---------", action)
    switch (action.type) {
        case "API_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case "FETCHING_DATA":
            return {
                ...state,
                isLoading: true
            };
        case "SOME_ERROR":
            return {
                isLoading : false,
                isError: true
            }
        default:
            return state
    }
}

export default apiDataReducer