import React from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Button,
    TabPane,
    TabContent
} from 'reactstrap';
import SubDetailEvents from '../detailpage/SubDetailEvents';
import SubDetailNews from '../detailpage/SubDetailNews';
import classnames from 'classnames';

import {GoogleMap} from 'components';

import {connect} from 'react-redux';

const commonGrayTextStyle = {color:"#888"};

class UniversityInfoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            followState : this.props.collegeInfo.followState,
            navigationTabIndex :'0',
            sectionTabIndex : '0'
        }
    }
    followingButtonToggle() {
        this.setState({
          followState: !this.state.followState
        });
    }

    setNavigationTabIndex(val) {
        this.setState({
          navigationTabIndex : val
        });
    }

    setSectionTabIndex(val) {
        this.setState({
          sectionTabIndex : val
        });
    }

    createFollowButton() {
        if(this.state.followState === true) return(<Button style={{width:"10rem"}} onClick={() => {this.followingButtonToggle();}}>Unfollow</Button>);
        else return(<Button color="primary" style={{width:"10rem"}} onClick={() => {this.followingButtonToggle();}}>Follow</Button>);
    }

    createSectionList() {
        return this.props.collegeInfo.sections.map((item) => {
            return (
                <li
                    key={item.index}
                    className={classnames({ active: this.state.sectionTabIndex === item.index })}
                    style={{textAlign:"left"}}
                    onClick = {() => {this.setSectionTabIndex(item.index);}}>
                    <a role="tab" data-toggle="tab">
                        {item.name}
                    </a>
                </li>
            );
        })
    }

    getDepartMembers(depart)
    {
        return depart.members.map((item) => {
            return (
                <Col xl={4}  key={item.imgUrl}>
                    <Card style={{padding:"1rem",margin:"1rem 0rem",display:"inline-block",width:"100%"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={3}><img src={item.imgUrl} alt='media' style={{width:"60px",borderRadius:"30px"}}/></Col>
                            <Col xl={9} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>{item.name}
                                <small style={commonGrayTextStyle}><br/>{item.subjectName}</small>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        })
    }
    createMemberList() {
        return this.props.collegeInfo.members.map((item) => {
            return (
                <div key={item.departmentName}>
                    <p style={{fontWeight:"bold",marginBottom:"0"}}>{item.departmentName}</p>
                    <Row>
                        {this.getDepartMembers(item)}
                    </Row>
                </div>
            );
        })
    }
    render() {
        var followers = this.props.collegeInfo.followers;
        if(parseInt(followers,10)>9999) followers = Math.floor(parseInt(followers,10) / 1000) + 'k';

        var following = this.props.collegeInfo.following;
        if(parseInt(following,10)>9999) following = Math.floor(parseInt(following,10) / 1000) + 'k';

        return(
          <div>
            <Row>
                <Col xl={12}>
                    <Card style={{padding:"1.2rem",textAlign:"left"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={2}>
                                <img src={this.props.collegeInfo.imgUrl} alt='media' style={{width:"7rem"}}/>
                            </Col>
                            <Col xl={6}>
                                <h5 style={{marginBottom:"1rem"}}><b>{this.props.collegeInfo.name}</b>
                                    <small style={commonGrayTextStyle}><br/>{this.props.collegeInfo.address}</small>
                                </h5>
                                <h6 style={commonGrayTextStyle}>Followers {followers}&nbsp;&nbsp;&nbsp;&nbsp; Following {following}</h6>
                            </Col>
                            <Col xl={3} style={{textAlign:"right"}}>
                                {this.createFollowButton()}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xl={12}>
                    <Card>
                        <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                            <li className={classnames({ active: this.state.navigationTabIndex === '0' })} onClick={() => this.setNavigationTabIndex('0')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Info</a></li>
                            <li className={classnames({ active: this.state.navigationTabIndex === '1' })} onClick={() => this.setNavigationTabIndex('1')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Library</a></li>
                            <li className={classnames({ active: this.state.navigationTabIndex === '2' })} onClick={() => this.setNavigationTabIndex('2')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Events</a></li>
                            <li className={classnames({ active: this.state.navigationTabIndex === '3' })} onClick={() => this.setNavigationTabIndex('3')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">News</a></li>
                            <li className={classnames({ active: this.state.navigationTabIndex === '4' })} onClick={() => this.setNavigationTabIndex('4')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Members</a></li>
                        </ul>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
            <TabContent activeTab={this.state.navigationTabIndex} style={{width:"100%"}}>
                <TabPane tabId='0'>
                    <Col xl={12}>
                        <Card style={{padding:"1rem"}}>
                            <GoogleMap/>
                        </Card>
                    </Col>
                </TabPane>
                <TabPane tabId='1'>
                    <Row style={{margin:"0rem"}}>
                    <Col xl={8}>
                        <Card style={{padding:"1rem"}}>
                            <CardBody>
                            asdfasdf
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card style={{padding:"0rem",textAlign:"left"}}>
                            <CardHeader style={{background:"white",color:"#666",lineHeight:"250%"}}>
                            SECTIONS
                            </CardHeader>
                            <CardBody style={{padding:"0rem"}}>
                                <ul className="list-unstyled custom-tabs-vertical" role="tablist" style={{borderBottom:"0px"}}>
                                    {this.createSectionList()}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId='2'>
                    <Col xl={12}>
                        <SubDetailEvents detailData={this.props.collegeInfo.events}/>
                    </Col>
                </TabPane>
                <TabPane tabId='3'>
                    <Col xl={12}>
                        <SubDetailNews detailData={this.props.collegeInfo.news}/>
                    </Col>
                </TabPane>
                <TabPane tabId='4' style={{textAlign:"left",padding:"0rem 1rem"}}>
                    {this.createMemberList()}
                </TabPane>
            </TabContent>
            </Row>
          </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        collegeInfo : state.userInfo.college
    }
}

export default connect(mapStateToProps)(UniversityInfoTab);
