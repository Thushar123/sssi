import React from "react";
import "./index.css";
import { Button, Form, Input } from 'antd';

const BannerSection = () =>{
    return(
        <React.Fragment>
           <div className="banner-section">
             <div className="banner-content">
                <h2>Assignment Help from <br /> The <span style={{color:'#FF7100'}}>#1</span> Rated brand</h2>
                <a href=""><button>Order Now</button></a>
                <p>24/7 Help For Your Assignments.</p>
             </div>
             <div className="get-quote-form-box">
                <h2><span style={{color:'#575354'}}>Get Quote </span> In 5 Minutes*</h2>
                    <Form
                        name="basic"
                    >
                        <Form.Item name="Name">
                           <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item name="Email">
                           <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="Phone">
                           <Input placeholder="Phone" />
                        </Form.Item>
                        <Form.Item name="Deadline">
                           <Input placeholder="Deadline" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Order Now
                            </Button>
                        </Form.Item>
                    </Form>
                
             </div>
           </div>
        </React.Fragment>
      );
}

export default BannerSection;