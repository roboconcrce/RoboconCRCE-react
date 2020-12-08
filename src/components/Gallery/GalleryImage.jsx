import React from 'react';
import {Image, Row,Col} from 'antd';
 import logo from '../../assets/img/gallery/1.jpg';
 import { Card } from 'antd';

const { Meta } = Card;




function GalleryImage() {
    return (
        <div>
            <div className="photos">
                {/* <Row>
                    <Card
                        className="image"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Row> */}
                <Row>
                    <Col span={12} >
                        <Image hoverable className="image" src={logo} width={500}/>
                    </Col>
                    <Col span={12} >
                        <Image className="image" src={logo} width={500}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                        <Image className="image" src={logo} width={500}/>
                    </Col>
                    <Col span={12} >
                        <Image className="image" src={logo} width={500}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                        <Image className="image" src={logo} width={500}/>
                    </Col>
                    <Col span={12} >
                        <Image className="image" src={logo} width={500}/>
                    </Col>
                </Row>  
                
                
                
            
                
            </div>
        </div>
    )
}

export default GalleryImage;
