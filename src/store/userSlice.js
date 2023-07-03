import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

export const regUser = createAsyncThunk(
  "user/regUser",
  async ({uid, login, password ,contactNo,cart,name}, { rejectWithValue }) => {
    try {
      const response = await fetch(`${endpoint}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({uid,name, login, password , contactNo, cart}),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error("registration wasn't successfull ");
      }

      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${endpoint}/users?login=${login}&password=${password}`
      );

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const data = await response.json();
      
      if (data.length < 1) {
        throw new Error("There is no such user :(");
      }
      localStorage.setItem("userId", data[0].id);
      localStorage.setItem("userEmail",data[0].login)
      localStorage.setItem("userCart",data[0].cart)
      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeUser = createAsyncThunk(
  "user/changeUser",
  async ({ id, login, username, avatar, description }, { rejectWithValue }) => {
    let formData = {}
    if(login) formData.login = login
    

    try {
      const response = await fetch(`${endpoint}/users/${localStorage.getItem("userId")}`, {
    
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({formData:{login}}),
      });
      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      console.log(data);

      if (data.length < 1) {
        throw new Error("couldn't change parameters :(");
      }

      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      login: "anime",
      password: "qwerty",
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    dismissError(state) {
      state.error = null;
    },
    logOut(state) {
      state.user = null;
    },
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [changeUser.pending]: (state) => {
      state.isLoading = true;
    },
    [changeUser.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload.message;
    },
    [changeUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

export const { auth, logOut, dismissError } = UserSlice.actions;

export default UserSlice;
