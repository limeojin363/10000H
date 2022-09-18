import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getObj } from "./getObj";
import { addRecord, removeRecord, changeRecordName } from './store'

function Content() {
    let dispatch = useDispatch();
    let state = useSelector(( state )=>{ return state })
    let {address} = useParams()

    let obj = getObj(state.rootFolder, address).childObj
    return (
        <PrintRecord obj={obj} address={address}/>
    )
}

function PrintRecord(props) {
    let obj = props.obj
    let address = props.address

    return (
        <div>
            <PrintSelfRecord obj={obj} address={address}/>
            {
                props.obj.children.map((a,i)=>{
                    return <PrintRecord key={i} obj={a} address={address + '-' + a.id}/>
                })
            }
        </div>
    )
}



function PrintSelfRecord(props) {
    let dispatch = useDispatch();
    let obj = props.obj
    let address = props.address

    return (
        <div>
            <div className="spaceBetween" style={{fontSize : '25px', paddingBottom : '10px', paddingTop : '10px', paddingLeft : '5px'}}>{obj.name}<button onClick={()=>{
                dispatch(addRecord({address : address, id : obj.id}))
            }}>➕</button></div>
            <div>
            {
                obj.records.map((a,i)=>{
                    return (
                    <div className="spaceBetween" style={{fontSize : '15px', paddingBottom : '3px', paddingLeft : '5px'}} key={i}>{a.comment}
                        <div><button onClick={()=>{
                            dispatch(removeRecord({address : address, id : a.id}))
                        }}>❌</button>
                        <button onClick={()=>{
                            let newComment = prompt()
                            dispatch(changeRecordName({address : address, id : a.id, newComment : newComment }))
                        }}>✅</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}


export {Content}