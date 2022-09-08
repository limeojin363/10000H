import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Folders() {
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder
    alert(start.findIndex((a)=>a.id==0))
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

function MakeFolder(props) {
    let navigate = useNavigate()
    let object = props.object
    let address = props.address + '-' + object.id
    return (
        <div className='folder'>
            <span onClick={()=>{navigate(address)}}>{object.name}</span>
            {object.children.map((a,i)=>{
                return (
                    <MakeFolder address={address} key={i} object={a}/>
                )
            })}
        </div>
    )
}

export {Folders}