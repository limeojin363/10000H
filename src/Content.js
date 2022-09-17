import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getObj } from "./getObj";
import { addRecord, removeRecord, changeRecordName } from './store'

function Content() {
    let dispatch = useDispatch();
    let state = useSelector(( state )=>{ return state })
    let {address} = useParams()

    let obj = getObj(state.rootFolder, address).childObj
    console.log(obj)
    
    return (
        <div>
            <div>{obj.name}</div>
        </div>
    )
}

export {Content}