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
        <div>
            {object.depth}{object.name}
            
            {object.children.map((a,i)=>{
                return (
                    <MakeFolder object={a}></MakeFolder>
                )
            })}
        </div>
    )
}

export {Folders}