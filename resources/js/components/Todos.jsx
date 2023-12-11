import React,{Fragment} from 'react'
import ToDo from './ToDo';
import { Row,Col } from 'react-bootstrap';

export default function Todos(props) {
    const todos = props.data;
      
  return (
    <Fragment>
      <section style={{minHeight:400}}>
      <Row className='mt-1'>
            <Col className='mx-auto bg-secondary rounded' xs={7} style={{minHeight:400}}>
                {todos.map((todo)=>{
                    //console.log(todo.id)
                   return <ToDo todo={todo.receiveData} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />
                }
                )}

            </Col>
        </Row>
      </section>
    </Fragment>
  )
}
