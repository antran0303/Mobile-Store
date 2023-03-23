import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "../../../node_modules/@reduxjs/toolkit/dist/index";
import userApi from "../../api/userApi";



export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload)

    //save data to local storage
    localStorage.setItem('access_token', data.jwt)

    //return user data
    localStorage.setItem('user', JSON.stringify(data.user))

    return data.user
});


export const login = createAsyncThunk('user/login', async (payload) => {
    const data = await userApi.login(payload)

    //save data to local storage
    localStorage.setItem('access_token', data.jwt)

    //return user data
    localStorage.setItem('user', JSON.stringify(data.user))
    return data.user;
}
)



const userSlice = createSlice({

    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem('user')) || {},
        setting: {},
    },

    reducers: {
        logout(state, action) {

            //remove local storage
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')


            //remove current state
            state.current = {}
        }
    },

    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }

});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;