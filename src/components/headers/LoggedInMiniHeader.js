import React from 'react';
import {
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,} from 'reactstrap';

import ProfileIcon from '../../containers/headers/ProfileIcon'

import '../../styles/global-styles'

export default class LoggedInMiniHeader extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div style={{padding:"0.1rem"}}>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/" className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-xs-8" align="left" style={{paddingLeft:"6%",display:"flex",alignItems:"center"}}>
                        <img src="logo.png" alt='logo' style={{width:"30px"}}/>
                        <b>UNIVERSITY.SOCIAL</b>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-4" isOpen={this.state.isOpen} navbar style={{textAlign:"center",paddingLeft:"5%"}}>
                        <Col xl={{size:6,offset:3}} lg={{size:1,offset:6}} md={{size:1,offset:5}} sm={{size:1,offset:0}} xs={{size:1,offset:4}} style={{display:"inline-block"}}><ProfileIcon/></Col>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
