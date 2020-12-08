import React from 'react'
import Forms from './Forms'
import { Row, Col } from 'antd';
import './srcontact.css'
import Logo from "../../assets/img/contact.png"

function SRContact() {
  return (
     <div className="container">
     <Row>
       <Col span={12}>
       <div className="intro">
         <h1 className="h1">Welcome to ContactUs page</h1> 
         <h2 className="h2">Help us to know better. &#128512;</h2> <br />         
         <div className="forms">
           <Forms/>
         </div>
       </div>
       </Col>
       
       <Col span={12}>
        <div >
          <img className="img-fluid-animated"  src={Logo} alt="logo"  />
        </div>
       </Col>     
     </Row> 
     </div>   
   
      
          
    
  )
}

export default SRContact
