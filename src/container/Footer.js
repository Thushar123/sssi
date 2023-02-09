import React from "react";
import "./index.css";
import { Input, Form } from 'antd';
const { Search } = Input;

const Footer = () =>{
    return(
        <React.Fragment>
            <div className="footer-top-bg">
              <img src={require('./images/footer-top-bg.png')} />
            </div>
           <div className="footer">
              <div className="footer-top-block">
                <div className="col col-1">
                    <p>Hello Assignment Help 3 Beech Place,<br /> Hallam 3803 Victoria, <br />Australia +61 433 572 020</p>
                </div>
                <div className="col col-2">
                    <h3>Quick Links</h3>
                    <div className="footer-quick-links">
                        <div style={{marginRight:'24px'}}>
                            <ul>
                                <li><a href="" >Home</a> </li>
                                <li><a href="" >About</a></li>
                                <li><a href="" >Services We Offer</a></li>
                                <li><a href="" >Careers</a></li>
                                <li><a href="" >Free Samples</a></li>
                                <li><a href="" >Blog</a></li>
                                <li><a href="" >FAQ's</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="">Privacy Policy</a> </li>
                                <li><a href="">Refund Policy</a> </li>
                                <li><a href="">Revision Policy</a> </li>
                                <li><a href="">Terms & Conditions</a> </li>
                                <li><a href="">Order Now</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Reviews</a> </li>
                                <li><a href=""> Value Added Services</a> </li>
                                <li><a href="">Podcast</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="footer-last-col">
                        <h3>Services </h3>
                        <div className="footer-services-links">
                            <div>
                                <ul>
                                    <li><a href="">Dissertation Writing Help </a> </li>
                                    <li><a href="">Thesis Writing Services</a></li>
                                    <li><a href="">Proofreading & Editing Services</a></li>
                                    <li><a href="">Essay Writing Help</a></li>
                                    <li><a href="">Case Studies Analysis & Solutions</a></li>
                                    <li><a href=""> Research paper Writing Experts</a></li>
                                    <li><a href="">Referencing & Bibliography</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="footer-last-col">
                        <h3>Subjects </h3>
                        <div className="footer-services-links">
                            <div>
                                <ul>
                                <li><a href=""></a></li>
                                    <li><a href="">Accounting </a></li>
                                    <li><a href="">Economics</a></li>
                                    <li><a href="">Management</a></li>
                                    <li><a href="">Nursing</a></li>
                                    <li><a href="">Law</a></li>
                                    <li><a href="">IT </a></li>
                                    <li><a href="">Computer Science</a></li>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Finance</a></li>
                                    <li><a href="">Statistics</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="footer-subscribe-block">
                <h3 style={{marginBottom:'8px'}}>Subscribe for Special Offers & News</h3>
                <Form>
                    <Search
                        placeholder="input search text"
                        allowClear
                        style={{
                            width: 304,
                        }}
                        />
                </Form>
              </div>
           </div>
           <div className="footer-copyright-block">
             <p style={{marginBottom:'8px'}}>© Copyright 2023. Hello Assignment Help . All Rights Reserved.</p>
            </div>
            <div className="footer-end-block">
              <p><strong>Note: </strong> The turn-around time is completely dependent on the word count, technicality and expertise required. </p>
              <p><strong>Disclaimer: </strong> Hello Assignment Help only deals in academic consultation and does NOT provide ghostwriting services of any kind. Our experts provide consultation services and samples and does not encourage students to use them for submission. </p>
              <p> We do not encourage academic misconduct of any sort and only provide guidance and reference help in better understanding of concepts via our subject matter experts. </p>
            </div>
        </React.Fragment>
      );
}

export default Footer;