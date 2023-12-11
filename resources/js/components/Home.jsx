import React,{Fragment,useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NewTodo from './NewTodo';
import Todos from './Todos';
import uuid from 'react-uuid'; 

export default function Home() {
    /*const dummytodos = [
        {
            'id':1,
            'title':'sohrab',
            'des':'ssdfsdf sds fdsf dsf dsf sdfsd fsdfsd fsdf sfsdf sfsdfsdf sf'

        },
        {
            'id':2,
            'title':'taspia',
            'des':'075126595'

        },
        {
            'id':3,
            'title':'inaya',
            'des':'010101010'

        },
    ];*/

const [data,setData]=useState([]);   
const newData = (receiveData)=>{

    setData([...data,{id:uuid(),receiveData}])

}
const onRemoveTodo = (id)=>{
    //const filteredData = data.filter((todo)=>todo.id != id);
    //setData(filteredData)
    setData((data)=> data.filter((todo)=>todo.id !=id));
}
  return (
    <Fragment>
        <Container className='bg-light'>
            <h1 className='text-center'>TODO APP</h1>
        <Row>
            <Col className='mx-auto bg-secondary rounded' xs={7}>
                <NewTodo newData={newData} />
            </Col>
        </Row>
        <Todos data={data} onRemoveTodo={onRemoveTodo} />
        </Container>
    </Fragment>
  )
}
