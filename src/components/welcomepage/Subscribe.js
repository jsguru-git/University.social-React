import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,} from 'reactstrap'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { SignupRequest,LoginContent } from 'components'

export default class Subscribe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showSignup : false,
            showLogin : false
        };
    }

    showSignupModal() {
        this.setState({ showSignup: true });
    }

    hideSignupModal() {
        this.setState({ showSignup: false });
    }
    
    showLoginModal() {
        this.setState({ showLogin: true });
    }

    hideLoginModal() {
        this.setState({ showLogin: false });
    }

    render(){
        let modalWidth;
        let modalHeight;
        if(window.innerWidth > 1200){
            modalWidth = 500;
            modalHeight = 500;
        }
        return(
            <Form style={{textAlign:"left"}}>
                <FormGroup row>
                    <Col xl={7} lg={6} md={6} sm={6} xs={7}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email address" />
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={4} xs={5}>
                        <Button className="col-xl-12" color="primary" onClick={this.showSignupModal.bind(this)}>
                            GET START
                        </Button>
                    </Col>
                </FormGroup>
                <Label>Already a member?</Label>{' '}
                <a style={{cursor:"pointer",color:"rgb(11,141,211)"}} onClick={this.showLoginModal.bind(this)}>Sign In</a>
                <Rodal
                    visible={this.state.showSignup}
                    onClose={this.hideSignupModal.bind(this)}
                    enterAnimation="flip"
                    closeOnEsc="true"
                    width={modalWidth}
                    height={modalHeight}
                    duration={400}
                    customMaskStyles={{backgroundColor:"rgba(255,255,255,0.8)"}}>
                    <SignupRequest/>
                </Rodal>
                <Rodal
                    visible={this.state.showLogin}
                    onClose={this.hideLoginModal.bind(this)}
                    enterAnimation="flip"
                    closeOnEsc="true"
                    width={modalWidth}
                    height={modalHeight}
                    duration={400}
                    customMaskStyles={{backgroundColor:"rgba(255,255,255,0.8)"}}>
                    <LoginContent/>
                </Rodal>
            </Form>
        )
    }
}
