import React from 'react';
import {
    Row,
    Col,
    Card,
    TabContent,
    TabPane,
} from 'reactstrap';

import classnames from 'classnames'

import SubDetailProjects from './SubDetailProjects'
import SubDetailMembers from './SubDetailMembers'
import SubDetailEvents from './SubDetailEvents'
import SubDetailFiles from './SubDetailFiles'
import SubDetailNews from './SubDetailNews'

const commonGrayTextStyle = {color:"#888"};

export default class PeopleData extends React.Component {
    
    constructor(props){
        super(props);
        console.log('received data is ',this.props.data);
        this.state={
            navigationTabIndex:'0'
        }
    }
    
    setNavigationTabIndex(val){
        this.setState({
            navigationTabIndex:val
        })
    }

    createTabNavs(){
        switch(this.props.data.duty.toLowerCase())
        {
            case 'student':
                return(
                    <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                        <li className={classnames({ active: this.state.navigationTabIndex === '0' })} onClick={() => this.setNavigationTabIndex('0')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Resume</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '1' })} onClick={() => this.setNavigationTabIndex('1')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Projects</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '2' })} onClick={() => this.setNavigationTabIndex('2')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Events</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '3' })} onClick={() => this.setNavigationTabIndex('3')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Files</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '4' })} onClick={() => this.setNavigationTabIndex('4')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Members</a></li>
                    </ul>
                );
            case 'faculty':
                return(
                    <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                        <li className={classnames({ active: this.state.navigationTabIndex === '0' })} onClick={() => this.setNavigationTabIndex('0')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Projects</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '1' })} onClick={() => this.setNavigationTabIndex('1')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Events</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '2' })} onClick={() => this.setNavigationTabIndex('2')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">News</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '3' })} onClick={() => this.setNavigationTabIndex('3')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Files</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '4' })} onClick={() => this.setNavigationTabIndex('4')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Members</a></li>
                    </ul>
                );
            case 'admin':
                return(
                    <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                        <li className={classnames({ active: this.state.navigationTabIndex === '0' })} onClick={() => this.setNavigationTabIndex('0')} style={{width:"25%",textAlign:"center"}}><a role="tab" data-toggle="tab">News</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '1' })} onClick={() => this.setNavigationTabIndex('1')} style={{width:"25%",textAlign:"center"}}><a role="tab" data-toggle="tab">Events</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '2' })} onClick={() => this.setNavigationTabIndex('2')} style={{width:"25%",textAlign:"center"}}><a role="tab" data-toggle="tab">Files</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '3' })} onClick={() => this.setNavigationTabIndex('3')} style={{width:"25%",textAlign:"center"}}><a role="tab" data-toggle="tab">Members</a></li>
                    </ul>
                );
            default:
                return "Nav Bar";
        }
    }

    renderLevelLabel(){
        return(
            <Row style={{paddingTop:"1rem"}}>
                <Col xl={12}>
                    <Card style={{padding:"0.5rem 1rem"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={1} style={{textAlign:"center"}}>
                                <img src='imgs/icon/medal.png' alt='medal' style={{width:"3.5rem"}}/>
                            </Col>
                            <Col xl={8} style={{textAlign:"left"}}>
                                <h4 style={{marginBottom:"0rem"}}>
                                    <b style={{color:"#888"}}>LEVEL : </b>
                                    <b>{this.props.data.level}</b>
                                </h4>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }

    renderResumeContents(){
        console.log('resume is ',this.props.data.resumes);
        if(this.props.data.resumes === undefined || this.props.data.resumes.length === 0) return (<p>There is no resume data</p>);
        return this.props.data.resumes.map((item) => {
            return(
                <Col xl={4}>
                    <Card style={{padding:"1.4rem",textAlign:"left",marginBottom:"1rem"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={9} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",textAlign:"left"}}>
                                <b style={{color:"#888"}}>{item.title}</b>
                            </Col>
                            <Col xl={3} style={{textAlign:"right"}}>
                                <b style={{color:"rgb(11,141,211)"}}>{item.score}</b>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            );
        });
    }
    createTabContents(){
        switch(this.props.data.duty.toLowerCase())
        {
            case 'student':
                return(
                <TabContent activeTab = {this.state.navigationTabIndex}>
                    <TabPane tabId='0'>
                        {this.renderLevelLabel()}
                        <Row style={{paddingTop:"1rem"}}>
                            {this.renderResumeContents()}
                        </Row>
                    </TabPane>
                    <TabPane tabId='1'>
                        <SubDetailProjects detailData={this.props.data.projects}/>
                    </TabPane>
                    <TabPane tabId='2'>
                        <SubDetailEvents detailData={this.props.data.events}/>
                    </TabPane>
                    <TabPane tabId='3'>
                        <SubDetailFiles detailData={this.props.data.files}/>
                    </TabPane>
                    <TabPane tabId='4'>
                        <SubDetailMembers detailData={this.props.data.members}/>
                    </TabPane>
                </TabContent>
                );
            case 'faculty':
                return(
                <TabContent activeTab = {this.state.navigationTabIndex}>
                    <TabPane tabId='0'>
                        <SubDetailProjects detailData={this.props.data.projects}/>
                    </TabPane>
                    <TabPane tabId='1'>
                        <SubDetailEvents detailData={this.props.data.events}/>
                    </TabPane>
                    <TabPane tabId='2'>
                        <SubDetailNews detailData={this.props.data.news}/>
                    </TabPane>
                    <TabPane tabId='3'>
                        <SubDetailFiles detailData={this.props.data.files}/>
                    </TabPane>
                    <TabPane tabId='4'>
                        <SubDetailMembers detailData={this.props.data.members}/>
                    </TabPane>
                </TabContent>
                );
            case 'admin':
                return(
                <TabContent activeTab = {this.state.navigationTabIndex}>
                    <TabPane tabId='0'>
                        <SubDetailNews detailData={this.props.data.news}/>
                    </TabPane>
                    <TabPane tabId='1'>
                        <SubDetailEvents detailData={this.props.data.events}/>
                    </TabPane>
                    <TabPane tabId='2'>
                        <SubDetailFiles detailData={this.props.data.files}/>
                    </TabPane>
                    <TabPane tabId='3'>
                        <SubDetailMembers detailData={this.props.data.members}/>
                    </TabPane>
                </TabContent>
                );
            default:
                return "Nav Bar";
        }
    }
    render(){
        var followers = this.props.data.followers;
        if(parseInt(followers,10)>999) followers = Math.floor(parseInt(followers,10) / 1000) + 'k';

        var following = this.props.data.followingPeoples;
        if(parseInt(following,10)>999) following = Math.floor(parseInt(following,10) / 1000) + 'k';

        console.log('people data is ',this.props.data);
        return(
            <div>
                <Row>
                    <Col xl={12}>
                        <Card style={{padding:"1.2rem",textAlign:"left"}}>
                            <Row style={{display:"flex",alignItems:"center"}}>
                                <Col xl={2} style={{textAlign:"center"}}>
                                    <img src={this.props.data.imgUrl} alt='media' style={{width:"5rem",borderRadius:"3rem"}}/>
                                </Col>
                                <Col xl={8}>
                                    <h5 style={{marginBottom:"1rem"}}><b>{this.props.data.name}</b>
                                        <small style={commonGrayTextStyle}><br/>{this.props.data.job} - {this.props.data.duty}</small>
                                    </h5>
                                    <h6 style={commonGrayTextStyle}>Followers {followers}&nbsp;&nbsp;&nbsp;&nbsp; Following {following}</h6>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <br/>
                </Row>
                <Row style={{paddingTop:"1rem"}}>
                    <Col xl={12}>
                    <Card>
                        {this.createTabNavs()}
                    </Card>
                    </Col>
                </Row>
                {this.createTabContents()}
            </div>
        )
    }
}