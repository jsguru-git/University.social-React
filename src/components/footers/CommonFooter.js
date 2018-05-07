import React from 'react'
import {
    Row,
    Col,
    FormGroup,
    Input,
    Nav,
    NavItem,
    NavLink} from 'reactstrap'

var FontAwesome = require('react-fontawesome');
export default class CommonFooter extends React.Component{
    languageChanged(e) {
        alert(e.target.value);
    }
    render(){
        return(
            <div style={{color:"#888"}}>
                <Row className="container-fluid" style={{padding:"3rem 0rem",margin:"0px",boxShadow:"0px -1px 5px #aaa",backgroundColor:"white"}}>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}></Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Row align="left">
                            <Col xl={4}>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink style={{color:"#666"}}><h5>COMPANY</h5></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Contact Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Careers</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Blogs</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Press</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col xl={4}>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink style={{color:"#666"}}><h5>PRODUCT</h5></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Why Choose Us?</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Pricing</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Customer Stories</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Security</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col xl={4}>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink style={{color:"#666"}}><h5>RESOURCES</h5></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Help Center</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Events</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Terms & Conditions</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#" style={{color:"#888"}}>Privacy Policy</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="container-fluid" style={{padding:"1rem",backgroundColor:"#f0f0f0",margin:"0px"}}>
                    <Col xl={{size:2,offset:1}} lg={{size:2,offset:1}} md={{size:3,offset:1}} sm={3} xs={12}>
                        <FormGroup style={{marginBottom:"0rem"}}>
                        <Input type="select" name="select" style={{backgroundColor:"#f0f0f0",border:"0px solid #f0f0f0"}} onChange = {this.languageChanged}>
                          <option>English(US)</option>
                          <option>Arabic</option>
                          <option>Hindi</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={3} lg={2} md={2} sm={3} xs={12}>
                        <Row>
                            <Col xl={2} lg={3} md={4} sm={4} xs={4}><a><FontAwesome className='super-crazy-colors' name='twitter' size="2x"/></a></Col>
                            <Col xl={2} lg={3} md={4} sm={4} xs={4}><a><FontAwesome className='super-crazy-colors' name='facebook' size="2x"/></a></Col>
                            <Col xl={2} lg={3} md={4} sm={4} xs={4}><a><FontAwesome className='super-crazy-colors' name='youtube-play' size="2x"/></a></Col>
                        </Row>
                    </Col>
                    <Col xl={{size:4,offset:1}} lg={{size:5,offset:1}} md={6} sm={6} xs={12}>
                        <FontAwesome className='super-crazy-colors' name='copyright'/>
                        &nbsp; 2018-2022 Codigo Technologies Pvt Ltd
                    </Col>
                </Row>
            </div>
        )
    }
}
