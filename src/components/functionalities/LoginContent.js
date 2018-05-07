import React from 'react'
import {
    Row,
    Col,
    Input,
    Button
} from 'reactstrap'

var FontAwesome = require('react-fontawesome');

export class LoginHome extends React.Component{
    constructor(props){
        super(props);
        this.onForget = this.onForget.bind(this);
    }
    onForget(event){
        this.props.onForgetButton();
    }
    render(){
        return(
            <div style={{padding:"2rem"}}>
                <h2><b>Sign In</b></h2>
                <span style={{color:"#888"}}>
                Please enter your details provided by your college Administrator. Your college must be registered with us in order to login
                </span>
                <div style={{paddingTop:"2rem"}}>
                    <label style={{textAlign:"left"}}>
                        <b>PHONE NUMBER</b>
                    </label>
                    <Input type="text" style={{width:"100%"}}/>
                    <br/>
                    <div>
                        <label style={{display:"inline-block",width:"50%",textAlign:"left"}}>
                            <b>PASSWORD</b>
                        </label>
                        <label style={{display:"inline-block",width:"50%",textAlign:"right"}}>
                            <a onClick={this.onForget}><b style={{color:"rgb(11,141,211)",cursor:"pointer"}}>Forgot</b></a>
                        </label>
                    </div>
                    <Input type="password" style={{width:"100%"}}/>
                </div>
                <br/>
                <div style={{paddingTop:"1rem"}}>
                    <Button color="primary" style={{width:"100%"}}>LOGIN</Button>
                </div>
            </div>
        )
    }
}

export class ForgetPasswordContent extends React.Component {
    constructor(props){
        super(props);
        this.onBackButton = this.onBackButton.bind(this);
    }
    onBackButton(event){
        this.props.onBack();
    }
    render(){
        return(
            <div style={{padding:"2rem"}}>
                <h2>
                    <a onClick={this.onBackButton}><FontAwesome name='chevron-left' title="Messages" style={{color:"rgb(11,141,211)",cursor:"pointer"}}/></a>&nbsp;&nbsp;
                    <b>Forgot Password</b>
                </h2>
                <span style={{color:"#888"}}>
                Please enter your details provided by your college Administrator.
                </span>
                <div style={{paddingTop:"2rem"}}>
                    <div>
                        <label style={{display:"inline-block",width:"50%",textAlign:"left"}}>
                            <b>PHONE NUMBER</b>
                        </label>
                        <label style={{display:"inline-block",width:"50%",textAlign:"right"}}>
                            <a><b style={{color:"rgb(11,141,211)",cursor:"pointer"}}>Send OTP Request</b></a>
                        </label>
                    </div>
                    <Input type="text" style={{width:"100%"}}/>
                    <br/>
                    <div>
                        <label style={{display:"inline-block",width:"50%",textAlign:"left"}}>
                            <b>OTP</b>
                        </label>
                        <label style={{display:"inline-block",width:"50%",textAlign:"right"}}>
                            <a><b style={{color:"rgb(11,141,211)",cursor:"pointer"}}>Resend OTP</b></a>
                        </label>
                    </div>
                    <Row style={{padding:"0rem 0.6rem"}}>
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
                </div>
                <div style={{textAlign:"center",paddingTop:"1rem"}}>
                    <h6><b><span style={{color:"rgb(80,208,80)"}}>OTP Sent </span><span style={{color:"gray"}}>| Resend other OTP in :</span><span style={{color:"rgb(11,141,211)"}}> 1.00S</span></b></h6>
                </div>
                <div style={{paddingTop:"1rem"}}>
                    <Button color="primary" style={{width:"100%"}} disabled>Enter New Password</Button>
                </div>
            </div>
        )
    }
}
export default class LoginContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageIndex : "home"
        }
        this.forgetPwdButtonClicked = this.forgetPwdButtonClicked.bind(this);
        this.backButtonClicked = this.backButtonClicked.bind(this);
    }

    forgetPwdButtonClicked(){
        this.setState({
            pageIndex : "forget"
        })
    }

    backButtonClicked(){
        this.setState({
            pageIndex : "home"
        })
    }
    render(){
        if(this.state.pageIndex === "home") return <LoginHome onForgetButton={this.forgetPwdButtonClicked}/>
        else if(this.state.pageIndex === "forget") return <ForgetPasswordContent onBack={this.backButtonClicked}/>
    }
}