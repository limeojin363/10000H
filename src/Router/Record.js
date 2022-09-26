import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getObj } from "../getObj";
import { addRecord, removeRecord, changeRecordName } from '../store'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";


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
    let [fadeIn, setFadeIn] = useState('fadeInStart')
    useEffect(()=>{
        setTimeout(()=>{setFadeIn('fadeInEnd', 1)})
        return ()=>{
            setFadeIn('fadeInStart')
        }
    },[])

    let obj = props.obj
    let address = props.address

    return (
        <div className={fadeIn} style={{paddingLeft: props.depth*10 + 'px'}}>
            <ShowSelfRecord first={props.first} obj={obj} address={address}/>
            {
                props.obj.children.map((a,i)=>{
                    return <ShowRecord key={i} obj={a} depth={props.depth+1} address={address + '-' + a.id}/>
                })
            }
        </div>
    )
}

function EachRecord(props) {
    let [fadeIn, setFadeIn] = useState('fadeInStart')
    useEffect(()=>{
        setTimeout(()=>{setFadeIn('fadeInEnd', 1)})
        return ()=>{
            setFadeIn('fadeInStart')
        }
    },[])
    let dispatch = useDispatch();
    let address=props.address
    let a=props.a
    return (
        <div className={"spaceBetween " + fadeIn} style={{fontSize : '15px', paddingBottom : '3px', paddingLeft : '5px'}}>{a.comment}
            <Dropdown>
                <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                Option
                </Dropdown.Toggle>
                <Dropdown.Menu variant="secondary">
                    <Dropdown.Item onClick={()=>{
                        dispatch(removeRecord({address : address, id : a.id}))
                    }}>삭제</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{
                        let newComment = prompt()                            
                        dispatch(changeRecordName({address : address, id : a.id, newComment : newComment }))
                    }}>코멘트 변경</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

function ShowSelfRecord(props) {
    let [fadeIn, setFadeIn] = useState('fadeInStart')
    useEffect(()=>{
        setTimeout(()=>{setFadeIn('fadeInEnd', 1)})
        return ()=>{
            setFadeIn('fadeInStart')
        }
    },[])

    let dispatch = useDispatch();
    let obj = props.obj
    let address = props.address
    return (
        <div className={fadeIn}>
            {
                props.first==1
                ?
                <div className={"spaceBetween " + fadeIn} style={{fontSize :  '35px', paddingBottom : '10px', paddingTop : '10px', paddingLeft : '5px'}}>{props.first == 1 ? '' : ' - '}{obj.name}<button style={{fontSize:'25px', width:'50px', height:'50px'}} onClick={()=>{
                    dispatch(addRecord({address : address, id : obj.id}))
                }}>➕</button></div>
                :
                <div className={"spaceBetween " + fadeIn} style={{fontSize :  '25px', paddingBottom : '10px', paddingTop : '10px', paddingLeft : '5px'}}>{props.first == 1 ? '' : ' - '}{obj.name}<button style={{fontSize:'25px', width:'50px', height:'50px'}} onClick={()=>{
                    dispatch(addRecord({address : address, id : obj.id}))
                }}>➕</button></div>
            }
            <div>
            {
                obj.records.map((a,i)=>{
                    return (
                        <EachRecord a={a} key={i} address={address}></EachRecord>
                    )
                })
            }
            </div>
        </div>
    )
}


export {Record}