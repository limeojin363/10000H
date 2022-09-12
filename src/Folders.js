import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addChild, addRecord, removeChild} from './store'

function Folders() {
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder.children
    return (
        <div className="folder">
            {
                start.map((a,i)=>{
                    return <MakeFolder address='/content/' key={i} object={start[i]}/>
                })
            }
        </div>
    )
}


// 객체를 props로 받아 해당 객체와 자식 객체들을 재귀적으로 호출하는 엘리먼트
function MakeFolder(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let state = useSelector(( state )=>{ return state })
    let object = props.object
    let address = ''
    if (object.depth != 0) {
        address = props.address + '-' + object.id
    } else {
        address = props.address + object.id
    }
    return (
        <div className='folder'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span onClick={()=>{navigate(address)}}>{object.name}</span>
                <span>
                    <button onClick={()=>{
                        dispatch(addChild({name : 'TempName', address : address}))
                    }}>+</button>
                    <button onClick={()=>{
                        dispatch(removeChild({address : address}))
                    }}>-</button>
                </span>
            </div>
            {object.children.map((a,i)=>{
                return (
                    <MakeFolder address={address} key={i} object={a}/>
                )
            })}
        </div>
    )
}

export {Folders}