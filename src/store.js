import { configureStore, createSlice } from '@reduxjs/toolkit'

let rootFolder = createSlice({
    name :  'rootFolder',
    initialState : {
      children:
      [
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
      ]
    },
    reducers : {
      removeChild(state, action) {
        let address = action.payload.address
        let obj = state
        let parentObj = state
        let childObj
        
        // 제거되는 객체의 위치 결정
        for (var i = 9; i < address.length; i++) {
          if (address[i]!='-') {
            let temp
            temp = obj.children.find((e)=>e.id==address[i])
            obj = temp
            if (i == address.length - 1) childObj = obj
            else if (i == address.length - 3) parentObj = obj
          }
        }
        console.log(parentObj.children)
        for (var i = 0; i < parentObj.children.length; i++) {
          // seek & destroy
          if (parentObj.children[i] == childObj) {
            console.log(1)
            parentObj.children.splice(i,1)
            break
          }
        }

      },
      addChild(state, action) {
        let address = action.payload.address
        let obj = state
        let parentObj = state
        let childObj
        
        // 추가되는 객체의 위치 결정
        for (var i = 9; i < address.length; i++) {
          if (address[i]!='-') {
            let temp
            temp = obj.children.find((e)=>e.id==address[i])
            obj = temp
            if (i == address.length - 1) childObj = obj
            else if (i == address.length - 3) parentObj = obj
            
          }
        }
        // 추가되는 객체의 id 결정
        let id = 0;
        for (var i = 0; i < childObj.children.length; i++) {
          if (childObj.children[i].id == id) id++;
        }
        let newObj = {name : action.payload.name, id : id, depth : childObj.depth+1, records : [], children : []}
        console.log(newObj)
        childObj.children.push(newObj)
      }
    }
})

export let { addChild, removeChild } = rootFolder.actions

export default configureStore({
  reducer: { 
    rootFolder : rootFolder.reducer
   }
})