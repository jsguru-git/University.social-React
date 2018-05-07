import React from 'react';
import {
    Col,
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,} from 'reactstrap';

import UploadIcon from '../../containers/headers/UploadIcon'
import NotificationIcon from '../../containers/headers/NotificationIcon'
import MessageIcon from '../../containers/headers/MessageIcon'
import BagIcon from '../../containers/headers/BagIcon'
import ProfileIcon from '../../containers/headers/ProfileIcon'

import HeaderSearchInput from '../../containers/HeaderSearchInput';

import '../../styles/global-styles'

export default class LoggedInHeader extends React.Component {
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
            <div style={{borderBottom:"2px solid rgb(11,141,211)",padding:"0.1rem"}}>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/" className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-8" align="left" style={{paddingLeft:"6%",display:"flex",alignItems:"center"}}>
                        <img src="logo.png" alt='logo' style={{width:"30px"}}/>
                        <b>UNIVERSITY.SOCIAL</b>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="col-xl-9 col-lg-7 col-md-7 col-sm-12 col-xs-12" isOpen={this.state.isOpen} navbar style={{textAlign:"center",paddingLeft:"5%"}}>
                        <Col xl={6} lg={5} md={4} sm={6} xs={6} style={{display:"inline-block"}}>
                            <HeaderSearchInput searchKey={this.props.searchKey}/>
                        </Col>
                        <Col xl={4} lg={6} md={7} sm={4} xs={4} style={{display:"inline-block"}}>
                            <Row style={{paddingLeft:"18%",paddingRight:"4%"}}>
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}><UploadIcon/></Col>
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}><NotificationIcon/></Col>
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}><MessageIcon/></Col>
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}><BagIcon/></Col>
                            </Row>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1} style={{display:"inline-block"}}><ProfileIcon/></Col>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
