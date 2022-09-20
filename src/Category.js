import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addChild, changeFolderName, removeChild} from './store'

function Category() {
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder.children
    return (
        <div>
            {
                start.map((a,i)=>{
                    return <ShowCategory address='/content/' key={i} object={start[i]}/>
                })
            }
        </div>
    )
}

// 객체를 props로 받아 해당 객체와 자식 객체들을 재귀적으로 호출하는 엘리먼트
function ShowCategory(props) {
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
        <div className='category'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span onClick={()=>{navigate(address)}}>
                    <div className="categoryNameBox">{object.name}</div>
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
                    }}>🔄</button>
                    <span className="option">◾◾◾</span>
                </span>
            </div>
            {object.children.map((a,i)=>{
                return (
                    <ShowCategory address={address} key={i} object={a}/>
                )
            })}
        </div>
    )
}


export {Category}