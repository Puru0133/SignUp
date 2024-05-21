const initialState = {
    loading: false,
    number: 0
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE NUMBER REQUEST": {
            return {
                ...state, loading: true
            }
        }
        case "INCREASE NUMBER SUCCESSFULLY": {
            // console.log("INCREASE NUMBER SUCCESSFULLY", action)
            return {
                ...state, number: action.payload + 1, loading: false
            }
        }
        case "INCREASE NUMBER FAILED": {
            return {
                ...state, loading: false
            }
        }
        case "DECREASED NUMBER SUCCESSFULLY": {
            // console.log("DECREASED  NUMBER SUCCESSFULLY", action)
            return {
                ...state, number: action.payload - 1, loading: false
            }
        }
        default: {
            return state
        }
    }
}

export default homeReducer;