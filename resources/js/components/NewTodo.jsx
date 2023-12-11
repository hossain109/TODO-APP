import React,{Fragment,useState} from 'react'
import { Button, Form } from 'react-bootstrap'

export default function NewTodo(props) {
    //const [input,setInput]=useState({title:"",description:""})
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.newData({title:e.target.title.value,des:e.target.description.value});    
        e.target.title.value="";
        e.target.description.value="";
        //props.newData(input);
    }
    //onChange={handleChange} in form field value={input.description}
   /* const handleChange=(e)=>{
        setInput(()=>{
           return {...input,[e.target.name]:e.target.value}
        })
    }*/
 
  return (
    <Fragment>
      <section>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label className='text-white'>Title</Form.Label>
                <Form.Control type='text'   name='title' id='title' placeholder='Enter your title' required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='text-white'>Description</Form.Label>
                <Form.Control name='description'   id='description' as="textarea" placeholder='Enter your description' required />
            </Form.Group>
            <Button type='submit' className='btn btn-info float-end mb-2'>Add TODO</Button>
        </Form>
      </section>
    </Fragment>
  )
}