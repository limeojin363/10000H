import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addRecord, removeRecord, changeRecordName } from './store'

function Content() {
    let dispatch = useDispatch();
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder
    
    let {ids} = useParams()
    let address = ids
    console.log(address)
    let idArray = []
    for (var i = 0; i < address.length; i++) {
        if (address[i] != '-') idArray.push(address[i])
    }
    console.log(idArray.length)
    let obj = start

    for (var i = 0; i < idArray.length; i++) {
        let temp = obj.children.find((a)=>a.id == idArray[i])
        obj = temp
    }
    let contentTitle = obj.name
    
    
    return (
        <div>
            <div>{contentTitle}</div>
        </div>
    )
}

export {Content}