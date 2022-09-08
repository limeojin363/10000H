import { useSelector } from "react-redux";

function Folders() {
    let state = useSelector(( state )=>{ return state })
    console.log(state.rootFolder)
    let start = state.rootFolder
    return (
        <div>
            <MakeFolder object={start}></MakeFolder>
        </div>
    )
}

function MakeFolder(props) {
    let object = props.object
    return (
        <div className='folder'>
            {object.name}
            
            {object.children.map((a,i)=>{
                return (
                    <MakeFolder key={i} object={a}></MakeFolder>
                )
            })}
        </div>
    )
}

export {Folders}