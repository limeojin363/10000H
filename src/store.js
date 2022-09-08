import { configureStore, createSlice } from '@reduxjs/toolkit'


let rootFolder = createSlice({
    name :  'rootFolder',
    initialState : {
      name : "Total", id : 0, depth : 0, 
      records : [
        {id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}
      ],
      children : [
        {name : "afdadfadsfafdss", id : 0, depth : 1, records : [{id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}], children : [{name : "afdadfs", id : 0, depth : 2, records : [], children : []}]},
        {name : "afdaasfdasfdfs", id : 1, depth : 1, records : [{id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}], children : [{name : "afdadfs", id : 0, depth : 2, records : [], children : []}]}
      ]
    },
    reducers : {
      addRecord(state) {
        state.records.push(1)
      },
      addChild(state) {
        state.children.push(1)
      }
    }
})

export default configureStore({
  reducer: { 
    rootFolder : rootFolder.reducer
   }
}) 