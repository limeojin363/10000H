import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addChild, changeName, removeChild} from './store'

function Content() {
    let dispatch = useDispatch();
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder

    let {ids} = useParams();
    let idArray = []
    for (var i = 0; i < ids.length; i++) {
        if (ids[i] != '-') idArray.push(ids[i])
    }
    let contentTitle = ''
    
    return (
        <div>
            <div></div>
            {
                idArray.map((a,i)=>{return <div key={i}>{a}</div>})
            }
        </div>
    )
}

export {Content}