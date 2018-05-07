import React from 'react';
import {
    Button,
    Col,
    Row,
    TabContent,
    TabPane} from 'reactstrap';

import classnames from 'classnames';

import Drawer from 'material-ui/Drawer';

import BagDrawerAssignmentList from './BagDrawerAssignmentList';
import BagDrawerEventList from './BagDrawerEventList';
import BagDrawerReportList from './BagDrawerReportList';

const iconFontStyle = {color:"rgb(11,141,211)"};
const iconFontStyle15 = {fontSize:"150%",color:"rgb(11,141,211)"};

const dropdownIconStyle = {backgroundColor:"white",border:"0px",boxShadow:"0px 0px white",padding:"0em"};

var FontAwesome = require('react-fontawesome');

export default class BagIcon extends React.Component {

    toggleDrawer(){
        this.setState({drawerStatus: !this.state.drawerStatus});
        setTimeout(function(){
            console.log(document.getElementsByClassName("MuiDrawer-paperAnchorRight-4")[0]);
            document.getElementsByClassName("MuiDrawer-paperAnchorRight-4")[0].style.top="4rem";

            document.getElementsByClassName("MuiDrawer-modal-11")[0].firstChild.style.backgroundColor="rgba(255,255,255,0.8)";
        },50);
    }

    closeDrawer () {
        this.setState({drawerStatus: false});
    }
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.state = {
            drawerStatus: false,
            activeTab : '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    asdf = (event) =>{
        console.log(event);
    }
    render() {
        return (
            <div>
                <Button style={dropdownIconStyle} onClick={this.toggleDrawer.bind(this)}>
                    <FontAwesome className='super-crazy-colors' name='bars' style={iconFontStyle15}/>
                </Button>
                <Drawer
                    anchor="right"
                    open={this.state.drawerStatus}
                    onClose={this.closeDrawer.bind(this)}
                    >
                    <div style={{width:"380px",margin:"1rem"}}>
                        <p align="right">
                            <a style={{cursor:"pointer"}}
                               onClick={this.closeDrawer.bind(this)}>
                                <FontAwesome className='super-crazy-colors' name='close' style={iconFontStyle}/>
                            </a>
                        </p>
                        <ul className="nav custom-tabs" role="tablist">
                            <li className={classnames({ active: this.state.activeTab === '1' })} style={{width:"33%",textAlign:"center"}}  onClick={() => { this.toggle('1'); }}><a role="tab" data-toggle="tab">Assignment</a></li>
                            <li className={classnames({ active: this.state.activeTab === '2' })} style={{width:"33%",textAlign:"center"}}  onClick={() => { this.toggle('2'); }}><a role="tab" data-toggle="tab">Event</a></li>
                            <li className={classnames({ active: this.state.activeTab === '3' })} style={{width:"33%",textAlign:"center"}}  onClick={() => { this.toggle('3'); }}><a role="tab" data-toggle="tab">Report</a></li>

                        </ul>
                        <TabContent activeTab={this.state.activeTab} style={{paddingBottom:"4rem"}}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col xl={12}>
                                        <BagDrawerAssignmentList/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col xl={12}>
                                        <BagDrawerEventList/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col xl={12}>
                                        <BagDrawerReportList/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Drawer>
            </div>
        );
    }
}