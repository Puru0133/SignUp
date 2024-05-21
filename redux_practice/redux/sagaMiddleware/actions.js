export const increaseRequest = (data) => ({
    type: "INCREASE NUMBER REQUEST",
    payload: data
})

export const increaseSuccess = (data) => ({
    type: "INCREASE NUMBER SUCCESSFULLY",
    payload: data
})

export const increaseFailed = () => ({
    type: "INCREASE NUMBER FAILED"
})

export const decreaseSuccess = (data) => ({
    type: "DECREASE NUMBER SUCCESSFULLY",
    payload: data
})

export const getUsersFetch = () => ({
    type: "FETCHED API REQUEST"
});