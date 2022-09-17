import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addChild, changeFolderName, removeChild} from './store'

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
                <span onClick={()=>{navigate(address)}}>
                    <div className="folderNameBox">{object.name}</div>
                </span>
                <span className="aboutChildren">
                    <button onClick={()=>{
                        dispatch(addChild({name : 'TempName', address : address}))
                    }}>➕</button>
                    <button onClick={()=>{
                        if (window.location.href.includes(address)) navigate('/')
                        dispatch(removeChild({address : address}))
                    }}>❌</button>
                    <button onClick={()=>{
                        var newName = prompt("새로운 폴더명을 입력하세요")
                        dispatch(changeFolderName({address : address, newName : newName}))
                    }}>✅</button>
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