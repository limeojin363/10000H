import { configureStore, createSlice } from '@reduxjs/toolkit'


let data = createSlice({
    name :  'data',
    initialState : '',
})

export default configureStore({
  reducer: { 
    data : data.reducer
   }
}) 
