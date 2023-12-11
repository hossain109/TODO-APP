import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



export default function ToDo(props) {

    const {title,des}=props.todo;
    const id=props.id;
    //console.log(id)
    const handleSubmit = (id)=>{
        props.onRemoveTodo(id);
    }
  return (
    <article>
        <Row  className='bg-info m-2 rounded'>
            <Col xs={10} >
                <b>{title}</b>
                <p>{des}</p>
            </Col>
            <Col className='test-center align-middle' xs={2}>
                <Button className='btn btn-danger ' type='submit' onClick={()=>handleSubmit(id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
            </Col>
        </Row>
    </article>
  )
}
