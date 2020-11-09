import React from 'react'
import Forms from './Forms'
import { Row, Col } from 'antd';
import './srcontact.css'
import Logo from "../../assets/img/contact.png"

function SRContact() {
  return (
   <srcontact id="srcontact">
     <Row>
       <marquee behavior="scroll" direction="left" scrollamount="20"><h3>ROBOCON 20-21 Welcome to CotactUs page. Help us to know better. Thanks for the feedback!!</h3></marquee>
       <Col span={12}>
       <div>
         <h1>Welcome to ContactUs page</h1> 
         <h2>Help us to know better. &#128512;</h2> <br />         
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
   </srcontact>
      
          
    
  )
}

export default SRContact
