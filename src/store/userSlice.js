import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [],
}

const userSlice = createSlice({
    name: "USER",
    initialState: initialState,
    reducers: {
        userPayload: (state, action) => {
            state.userData.push(action.payload)
            console.log("///////",state.userData)
        }
    }
})

export const { userPayload } = userSlice.actions;
export default userSlice.reducer
