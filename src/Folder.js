import { useSelector } from "react-redux";


function Folder() {
    let a = useSelector((state)=>{ return state })
    console.log(a)
}