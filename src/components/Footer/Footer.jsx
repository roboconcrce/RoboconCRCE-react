import React from 'react';
import './footer.css';
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  HomeFilled
} from '@ant-design/icons';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer">
      <Row>
        <Col lg={12} xs={24}>
          <div>
            <h1>ROBOCON CRCE</h1>

            <div className="nav-icons">
              <a target="_blank" href="https://www.facebook.com/roboconcrce/">
                <FacebookFilled className="icon" />
              </a>
              <a target="_blank" href="">
                <InstagramFilled className="icon" />
              </a>
              <a target="_blank" href="">
                <LinkedinFilled className="icon" />
              </a>
            </div>
          </div>
        </Col>

        <Col lg={12} xs={24}>
          <div id="contact">
            <h1>
              Contact <span className="touch"> Info</span>
            </h1>
            <table id="myTable">
              <tr>
                <td>
                  <HomeFilled className="icon" />
                </td>
                <td className="td-text">
                  Fr. Conceicao Rodrigues College of Engineering, Bandstand,
                  Bandra (W), Mumbai.
                </td>
              </tr>
              <tr>
                <td>
                  <PhoneFilled className="icon" />
                </td>
                <td className="td-text">8569455785</td>
              </tr>
              <tr>
                <td>
                  <MailFilled className="icon " />
                </td>
                <td className="td-text">
                  <a href="mailto: robocon.frcrce@gmail.com">
                    robocon.frcrce@gmail.com
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
