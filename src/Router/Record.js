import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getObj } from "../getObj";
import { addRecord, removeRecord, changeRecordName } from '../store'

function Record() {
    let dispatch = useDispatch();
    let state = useSelector(( state )=>{ return state })
    let {address} = useParams()

    let obj = getObj(state.rootFolder, address).childObj
    return (
        <ShowRecord obj={obj} address={address} first={1} depth={0}/>
    )
}

function ShowRecord(props) {
    let obj = props.obj
    let address = props.address

    return (
        <div style={{paddingLeft: props.depth*5 + 'px'}}>
            <ShowSelfRecord first={props.first} obj={obj} address={address}/>
            {
                props.obj.children.map((a,i)=>{
                    return <ShowRecord key={i} obj={a} depth={props.depth+1} address={address + '-' + a.id}/>
                })
            }
        </div>
    )
}

function ShowSelfRecord(props) {
    let dispatch = useDispatch();
    let obj = props.obj
    let address = props.address
    return (
        <div>
            <div className="spaceBetween" style={{fontSize : props.first==1? '35px' : '25px', paddingBottom : '10px', paddingTop : '10px', paddingLeft : '5px'}}>{props.first == 1 ? '' : ' - '}{obj.name}<button onClick={()=>{
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
                        }}>🔄</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}


export {Record}