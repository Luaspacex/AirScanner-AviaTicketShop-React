import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

// export const regUser = createAsyncThunk(
//   "user/regUser",
//   async ({ login, password }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `${endpoint}/users?login=${login}&password=${password}`,
//         {
//           method: "POST",
//           body: JSON.stringify({ login, password }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // if (!response.ok) {
//       //   throw new Error("Server error!");
//       // }

//       const data = await response.json();

//       // if (data.length < 1) {
//       //   throw new Error("There is no such user :(");
//       // }

//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
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
      localStorage.setItem("userCart",data[0].cart)
      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const settingsUser = createAsyncThunk(
//   "user/settings",

//   async ({id, email, username, avatar, description }, { rejectWithValue }) => {
//     let formData = {}
//     if(email) formData.email = email
//     if(username) formData.username = username
//     if(avatar) formData.avatar = avatar
//     if(description) formData.description = description
//     try {
//       const response = await fetch(
//         `${endpoint}/posts/${id}`,
//         {
//           method: "PATCH",
//           // body: JSON.stringify({ login, password }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//               body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Server error!");
//       }

//       const data = await response.json();

//       if (data.length < 1) {
//         throw new Error("There is no such user :(");
//       }

//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
export const changeUser = createAsyncThunk(
  "user/changeUser",
  async ({ id, email, username, avatar, description }, { rejectWithValue }) => {
    let formData = {}
    if(email) formData.email = email
    if(username) formData.username = username
    if(avatar) formData.avatar = avatar
    if(description) formData.description = description
    try {
      const response = await fetch(`${endpoint}/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, avatar, description }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

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
      state.user.name = action.payload;
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
