import React from 'react'
import {
    Row,
    Col,
    Input,
    Button
} from 'reactstrap'

export default class SignupRequest extends React.Component {
    render(){
        return(
            <div style={{padding:"4rem 2rem"}}>
                <h2><b>Confirm Mail OTP</b></h2>
                <span style={{color:"#888"}}>
                Please enter your details below. Our sales team will contact your with 24Hrs
                </span>
                <div style={{paddingTop:"4rem"}}>
                    <label style={{display:"inline-block",width:"50%",textAlign:"left"}}>
                        <b>OTP</b>
                    </label>
                    <label style={{display:"inline-block",width:"50%",textAlign:"right"}}>
                        <a style={{color:"rgb(11,141,211)",cursor:"pointer"}}><b>RESEND OTP</b></a>
                    </label>
                </div>
                <Row style={{padding:"1rem 0.6rem"}}>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                    <Col xl={2} style={{padding:"0rem 0.3rem"}}>
                    <Input type="text"/>
                    </Col>
                </Row>
                <div style={{paddingTop:"1rem"}}>
                    <Button color="primary" style={{width:"100%"}}>CONFIRM</Button>
                </div>
            </div>
        )
    }
}