import { configureStore, createSlice } from '@reduxjs/toolkit'

let rootFolder = createSlice({
    name :  'rootFolder',
    initialState : [
      {
      name : "Total", id : 0, depth : 0, 
      records : [
        {id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}
      ],
      children : [
        {name : "afdadfadsfafdss", id : 0, depth : 1, records : [{id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}], children : [{name : "afdadfs", id : 0, depth : 2, records : [], children : []}]},
        {name : "afdaasfdasfdfs", id : 1, depth : 1, records : [{id : 0, type : 'a', date : "Mon Apr 19 2021", comment : 'asdfadsf'}], children : [{name : "afdadfs", id : 0, depth : 2, records : [], children : []}]}
      ]
    }
  ],
    reducers : {
      removeChild(state, action) {
      },

      addChild(state, action) {
        let address = action.payload.address
        let obj = state
        let parentObj
        let childObj
        
        for (var i = 9; i < address.length; i++) {
          if (address[i]!='-') {
            let temp
            if (i == 9) {
              temp = obj.find((e)=>e.id==address[i])
            }
            else {
              temp = obj.children.find((e)=>e.id==address[i])
            }
            obj = temp
            if (i == address.length - 1) childObj = obj
            else if (i == address.length - 3) parentObj = obj
            
          }
        }
        
        let newObj = {name : action.payload.name, id : 0, depth : childObj.depth+1, records : [], children : []}

        childObj.children.push(newObj)
      }
    }
})

export let { addChild } = rootFolder.actions

export default configureStore({
  reducer: { 
    rootFolder : rootFolder.reducer
   }
})