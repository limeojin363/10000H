import { configureStore, createSlice } from '@reduxjs/toolkit'
import {getObj} from './getObj'

let rootFolder = createSlice({
    name :  'rootFolder',
    initialState : {
      children:
      [
        {
          name : "Total", id : 0, depth : 0,
          records : [
            {id : 0, comment : 'asdfadsf'}
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
        let {parentObj, childObj} = getObj(state, action.payload.address)
        
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
        let {parentObj, childObj} = getObj(state, action.payload.address)

        // 추가되는 객체의 id 결정
        let id = 0;
        for (var i = 0; i < childObj.children.length; i++) {
          if (childObj.children[i].id == id) id++;
        }
        let newObj = {name : action.payload.name, id : id, depth : childObj.depth+1, records : [], children : []}
        childObj.children.push(newObj)
      },
      changeFolderName(state,action) {
        let {parentObj, childObj} = getObj(state, action.payload.address)
        let newName = action.payload.newName
        childObj.name = newName
      },
      addRecord(state,action) {
        let {parentObj, childObj} = getObj(state, action.payload.address)
        let id = 0;
        for (let i = 0; i < childObj.records.length; i++) {
          if (id == childObj.records[i].id) {
            id++
          }
        }
        childObj.records.push({id : id, comment : 'tempRecord' })        
      },
      removeRecord(state,action) {
        let {parentObj, childObj} = getObj(state, action.payload.address)
        let id = action.payload.id
        childObj.records.map((record,i)=>{
          if (record.id==id) {
            childObj.records.splice(i,1)
            return
          }
        })
      },
      changeRecordName(state,action) {
        let {parentObj, childObj} = getObj(state, action.payload.address)
        let id = action.payload.id
        let newComment = action.payload.newComment
        childObj.records.map((record,i)=>{
          if (record.id==id) {
            record.comment = newComment
          }
        })
      }
    }
})

export let { addChild, removeChild, changeFolderName, addRecord,removeRecord,changeRecordName} = rootFolder.actions

export default configureStore({
  reducer: { 
    rootFolder : rootFolder.reducer
   }
})