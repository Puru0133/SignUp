const initialValue = {
    value: 0
}

const valueReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                value: state.value + 1
            };
        case 'SUBTRACT':
            return {
                value: state.value - 1
            };
        case 'MULTIPICATION':
            return {
                value: state.value * state.value
            };
        case 'DIVISION':
            return {
                value: state.value / 10
            };
        default:
            return state;
    }
}

export default valueReducer