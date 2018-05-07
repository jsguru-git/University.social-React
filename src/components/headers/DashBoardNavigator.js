import React from 'react';
import {
    Row,
    Col,
    } from 'reactstrap';

import '../../styles/global-styles'
import classnames from 'classnames';

export default class DashBoardNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div style={{backgroundColor:"rgb(11,141,211)",padding:"0rem 1rem"}}>
                <Row>
                    <Col xl={7} style={{paddingLeft:"5%"}}>
                        <ul className="nav custom-tabs-blue" role="tablist" style={{borderBottom:"0",fontSize:"1.2rem"}}>
                            <li className={classnames({ active: this.props.activeTab === '1' })} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab" href="dashboard">Dashboard</a></li>
                            <li className={classnames({ active: this.props.activeTab === '2' })} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab" href="members">Members</a></li>
                            <li className={classnames({ active: this.props.activeTab === '3' })} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab" href="programs">Subjects</a></li>
                            <li className={classnames({ active: this.props.activeTab === '4' })} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab" href="billings">Billings</a></li>
                            <li className={classnames({ active: this.props.activeTab === '5' })} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab" href="settings">Settings</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}
