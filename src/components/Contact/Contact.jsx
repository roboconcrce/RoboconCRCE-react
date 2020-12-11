import React,{useState} from 'react';
import './contact.css';
import { Row, Col, Form, Input,Button  } from 'antd';
import contactImg from "../../assets/img/contact.png"

const { TextArea } = Input;

function Contact() {

  const [info,setInfo] = useState({
    name:'',
    email:'',
    mobile:'',
    message:''
  })

  const handleChange = (e)=>{
    const {name,value}=e.target
    setInfo(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }


  const onSubmit= (e)=>{
    e.preventDefault()
    console.log('INFO = ',info)
  }

  return (
    <section id='contactPage'>
      <Row>
        <Col lg={12} xs={24}>
          <div className='form'>

            <h1>Contact Us</h1>
            <Form onSubmit = {onSubmit}>
              <Input 
                name = 'name' 
                placeholder="Name" 
                onChange={handleChange} 
                value={info.name}

              /><br/><br/>

              <Input 
                name = 'email' 
                placeholder="Email" 
                onChange={handleChange} 
                value={info.email}

                /><br/><br/>

              <Input 
                type='number' 
                name = 'mobile' 
                placeholder="mobile" 
                onChange={handleChange} 
                value={info.mobile}
                /><br/><br/>

              <TextArea 
              rows={4} 
              name='message' 
              placeholder='Your Message' 
              onChange={handleChange} 
              value={info.message} 
              /><br/><br/>
              
              <button type='submit' onClick={onSubmit} >
                Submit
              </button> 
            </Form>         
          </div>
        </Col>

        <Col lg={12} xs={24}>
          <div style={{textAlign:'center'}}>
            <img src={contactImg} alt="contactImg" className="img-fluid-animated"    />
          </div>
        </Col>

      </Row>

    </section>
  );
}

export default Contact;
