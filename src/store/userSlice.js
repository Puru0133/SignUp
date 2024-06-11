import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [],
    isSignedIn: true,
    loggedinUserData: []
}

const userSlice = createSlice({
    name: "USER",
    initialState: initialState,
    reducers: {
        userPayload: (state, action) => {
            state.userData.push(action.payload)
            // state.isSignedIn = false
            console.log("///////", state.userData)
        },
        // createUserData: (state, action) => {
        //     state.newUserData = action.payload
        // },
        userLoginPayload: (state, action) => {
            state.loggedinUserData = action.payload
            console.log("-========================", state.loggedinUserData)
            state.isSignedIn = false
        },
        logoutUser: (state) => {
            state.isSignedIn = true;
            state.loggedinUserData = []
        },
    }
})

export const { userPayload, userLoginPayload, logoutUser } = userSlice.actions;
export default userSlice.reducer
