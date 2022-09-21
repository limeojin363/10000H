import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addChild, changeCategoryName, removeChild} from '../store'
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";

function CategoryOption(props) {
    let dispatch = useDispatch();

    let address = props.address
    let [move, setMove] = useState(0)

    
    return(  
        <div>
            {
            move?
            <Button size="sm" variant="secondary" onClick={()=>{

            }}>여기로 이동..</Button>
            :
            <Dropdown>
                <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                Option
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{
                            dispatch(addChild({name : 'TempName', address : address}))
                        }}>하위 카테고리 생성</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{
                            dispatch(removeChild({address : address}))
                        }}>삭제</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{
                            var newName = prompt("변경할 카테고리 이름을 입력하세요")
                            dispatch(changeCategoryName({address : address, newName : newName}))
                        }}>이름 변경</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{
                            setMove(1)
                        }}>이동</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>            }

        </div>
    )
  }
  


function Category() {
    let state = useSelector(( state )=>{ return state })
    let start = state.rootFolder.children
    return (
        <div>
            <div>클릭시 해당 카테고리의 기록으로 이동합니다</div>
            {
                start.map((a,i)=>{
                    return <ShowCategory address='/record/' key={i} object={start[i]}/>
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
        <div className='category' style={{position:'relative'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span onClick={()=>{navigate(address)}}>
                    <div className="nameBox">{object.name}</div>
                </span>
                <span className="aboutChildren">
                    <span className="option"><CategoryOption address={address}/></span>
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