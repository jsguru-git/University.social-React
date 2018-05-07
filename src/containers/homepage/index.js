import React from 'react';
import {
    Button,
    Container,
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Progress,
    TabPane,
    TabContent
} from 'reactstrap';

import Checkbox from 'material-ui/Checkbox';

import '../../styles/global-styles'
import classnames from 'classnames';
import {connect} from 'react-redux';

import UniversityInfoTab from './UniversityInfoTab';
import MyBlogTab from './MyBlogTab';

var FontAwesome = require('react-fontawesome');

const tabTitleStyle = {color:"black",backgroundColor:"white",textAlign:"left",lineHeight:"300%"};
const commonGrayTextStyle = {color:"#888"};

class HomepageContent extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      var tmp = [];
      var tmpSubjectChaters = [];
      this.props.userInfo.subjects.map((item) => {
          tmp[item.index] = '0';

          if(item.chapters === undefined) tmpSubjectChaters[item.index] = '0';
          else tmpSubjectChaters[item.index] = item.chapters[0].index;
      });
      this.state = {
        drawerStatus: false,
        activeTab : 0,
        subjectsNavTab : tmp,
        studentTab : '0',
        chapterNavTab : tmpSubjectChaters
      }
    }

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    setSubjectNavTabIndex(subjectIndex,val) {
        var tmp = this.state.subjectsNavTab;
        tmp[subjectIndex]=val;
        this.setState({
            subjectsNavTab:tmp
        })
    }
    setSubjectChapterTabsIndex(subjectIndex,val) {
        var tmp = this.state.chapterNavTab;
        tmp[subjectIndex]=val;
        this.setState({
            chapterNavTab:tmp
        })
    }
    setStudentTabIndex(val) {
        this.setState({
            studentTab : val
        })
    }
    createSubjectsList() {
        return this.props.userInfo.subjects.map((item) => {
            return (
                <li
                  key={item.index}
                  style={{textAlign:"left",lineHeight:"350%"}}
                  className={classnames({ active: this.state.activeTab === item.index })}
                  onClick={() => { this.toggle(item.index); }}>
                    <a role="tab" data-toggle="tab">
                      <img src={item.lecturer.imgUrl} alt='media' style={{width:"40px",borderRadius:"30px"}}/>&nbsp;&nbsp;&nbsp;{item.name}
                    </a>
                </li>
            );
        })
    }

    createAgendaList(agenda) {
        if(agenda !== undefined){
            return agenda.map((item) => {
                var tmpStyle;
                if(item.passed === true) tmpStyle = {marginBottom:"0",color:"#aaa"};
                else tmpStyle = {marginBottom:"0",color:"#666"};
                return(
                    <div key={item.name}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <Checkbox
                                style={{color:'rgb(11,141,211)'}}
                                checked={item.passed}
                                disabled={!item.passed}
                            />
                            <h6 style={tmpStyle}>{item.name}</h6>
                        </div>
                    </div>
                )
            });
        }
    }

    createChapterList (subjectIndex,chapters) {
        if(chapters !== undefined) {
            return chapters.map((item) => {
                return(
                    <li
                      key={item.index}
                      className={classnames({ active: this.state.chapterNavTab[subjectIndex] === item.index })}
                      style={{textAlign:"left"}}
                      onClick={() => {this.setSubjectChapterTabsIndex(subjectIndex,item.index)}}
                      >
                        <a role="tab" data-toggle="tab" style={{display:"block",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:"0rem 1rem"}}>
                            {item.title}
                        </a>
                    </li>
                )
            })
        }
    }
    findPendingAssignments(list) {
        if(list !== undefined)
            return list.map((item) => {
                if(item.submitted === false)
                return(
                  <div>
                      <div style={{display:"flex",alignItems:"top center"}}>
                          <Checkbox
                            style={{color:'rgb(11,141,211)'}}
                            checked={item.submitted}
                            disabled={!item.submitted}
                          />
                          <h5 style={{marginTop:"0.5rem",paddingLeft:"1rem"}}><small>{item.content}</small><br/><br/><h6 style={commonGrayTextStyle}>DUE DATE : {item.deadline}</h6></h5>
                      </div>
                      <hr/>
                  </div>
                )
            })
    }
    findCompletedAssignments(list) {
        if(list !== undefined)
            return list.map((item) => {
                if(item.submitted === true)
                return(
                  <div>
                      <div style={{display:"flex",alignItems:"top center"}}>
                          <Checkbox
                            style={{color:'rgb(11,141,211)'}}
                            checked={item.submitted}
                            disabled={!item.submitted}
                          />
                          <h5 style={{marginTop:"0.5rem",paddingLeft:"1rem"}}><small>{item.content}</small><br/><br/><h6 style={commonGrayTextStyle}>DUE DATE : {item.deadline}</h6></h5>
                      </div>
                      <hr/>
                  </div>
                )
            })
    }

    createSubjectReportList(list) {
        console.log('reports ',list);
        if(list !== undefined)
            return list.map((item) => {
                var passMarkStyle;
                if(item.passed === true) passMarkStyle = {width:"15px",height:"15px",borderRadius:"20px",backgroundColor:"rgb(28,177,28)"};
                else passMarkStyle = {width:"15px",height:"15px",borderRadius:"20px",backgroundColor:"rgb(226,30,30)"};
                return(
                    <Col xl={4}>
                        <Card style={{textAlign:"left",padding:"1rem"}}>
                            <Row style={{display:"flex",alignItems:"center"}}>
                                <Col xl={10} style={{display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}><h5><b>{item.score}</b><b style={commonGrayTextStyle}> / {item.target}</b></h5>
                                    <small style={commonGrayTextStyle}>{item.title}</small>
                                </Col>
                                <Col xl={2}>
                                    <div style={passMarkStyle}/>
                                </Col>
                            </Row>
                        </Card>
                        <br/>
                    </Col>
                )
            })

    }

    createSubjectMembersList(students) {
        console.log(students);
        if(students !== undefined)
            return students.map((item) => {
                return(
                    <Col xl={4}>
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
    
    createSubjectTabContents() {
        return this.props.userInfo.subjects.map((item) => {
            var students = item.lecturer.students;
            if(parseInt(students,10)>9999) students = Math.floor(parseInt(students,10) / 1000) + 'k';

            var alumni = item.lecturer.alumni;
            if(parseInt(alumni,10)>9999) alumni = Math.floor(parseInt(alumni,10) / 1000) + 'k';
            return (
                <TabPane tabId={item.index} key={item.index}>
                    <Row>
                        <Col xl={12}>
                            <Card style={{padding:"1.2rem",textAlign:"left"}}>
                                <Row style={{display:"flex",alignItems:"center"}}>
                                    <Col xl={2}>
                                        <img src={item.lecturer.imgUrl} alt='media' style={{width:"7rem"}}/>
                                    </Col>
                                    <Col xl={6}>
                                        <h5 style={{marginBottom:"1rem"}}><b>{item.name}</b>
                                            <small style={commonGrayTextStyle}><br/>{item.lecturer.name}</small>
                                        </h5>
                                        <h6 style={commonGrayTextStyle}>Students {students}&nbsp;&nbsp;&nbsp;Alumni {alumni}</h6>
                                    </Col>
                                    <Col xl={3} style={{textAlign:"right"}}>
                                        <Button color="primary" style={{width:"10rem"}}>Chat</Button>
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
                                    <li className={classnames({ active: this.state.subjectsNavTab[item.index] === '0' })} onClick={() => this.setSubjectNavTabIndex(item.index,'0')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Info</a></li>
                                    <li className={classnames({ active: this.state.subjectsNavTab[item.index] === '1' })} onClick={() => this.setSubjectNavTabIndex(item.index,'1')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Chapters</a></li>
                                    <li className={classnames({ active: this.state.subjectsNavTab[item.index] === '2' })} onClick={() => this.setSubjectNavTabIndex(item.index,'2')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Assignment</a></li>
                                    <li className={classnames({ active: this.state.subjectsNavTab[item.index] === '3' })} onClick={() => this.setSubjectNavTabIndex(item.index,'3')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Report</a></li>
                                    <li className={classnames({ active: this.state.subjectsNavTab[item.index] === '4' })} onClick={() => this.setSubjectNavTabIndex(item.index,'4')} style={{width:"20%",textAlign:"center"}}><a role="tab" data-toggle="tab">Members</a></li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <TabContent activeTab={this.state.subjectsNavTab[item.index]} style={{width:"100%"}}>
                              <TabPane tabId='0'>
                                  <Col xl={12}>
                                  <Card style={{padding:"1.5rem"}}>
                                      <div style={{textAlign:"left"}}>
                                          <h5 style={{color:"#666"}}><b>SUBJECT DURATION</b></h5><br/>
                                          <Progress striped value={item.progress} />
                                      </div>
                                  </Card>
                                  <br/>
                                  <Card style={{padding:"1.5rem"}}>
                                      <div style={{textAlign:"left"}}>
                                          <h5 style={{color:"#666"}}><b>SUBJECT AGENDA</b></h5><hr/>
                                          {this.createAgendaList(item.agenda)}
                                      </div>
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
                                          <Card>
                                              <CardHeader style={{backgroundColor:"white",textAlign:"left",padding:"1.2rem 1rem"}}>
                                                  Chapters
                                              </CardHeader>
                                              <CardBody style={{padding:"0rem"}}>
                                                  <ul className="list-unstyled custom-tabs-vertical" role="tablist" style={{borderBottom:"0px"}}>
                                                      {this.createChapterList(item.index,item.chapters)}
                                                  </ul>
                                              </CardBody>
                                          </Card>
                                      </Col>
                                  </Row>
                              </TabPane>
                              <TabPane tabId='2'>
                                  <Col xl={12}>
                                      <Card style={{padding:"2rem",textAlign:"left"}}>
                                          <br/><b>ASSIGNMENTS PENDING</b><br/><hr/>
                                          {this.findPendingAssignments(item.assignments)}
                                          <br/><b>ASSIGNMENTS COMPLETED</b><br/><hr/>
                                          {this.findCompletedAssignments(item.assignments)}
                                      </Card>
                                  </Col>
                              </TabPane>
                              <TabPane tabId='3'>
                                  <Row style={{margin:"0rem"}}>
                                      {this.createSubjectReportList(item.reports)}
                                  </Row>
                              </TabPane>
                              <TabPane tabId='4'>
                                  <Row style={{margin:"0rem"}}>
                                      <div style={{width:"80%",paddingLeft:"20%"}}>
                                      <ul className="nav custom-tabs" role="tablist">
                                          <li className={classnames({ active: this.state.studentTab === '0' })} onClick={() => this.setStudentTabIndex('0')} style={{width:"50%",textAlign:"center"}}><a role="tab" data-toggle="tab">Students</a></li>
                                          <li className={classnames({ active: this.state.studentTab === '1' })} onClick={() => this.setStudentTabIndex('1')} style={{width:"50%",textAlign:"center"}}><a role="tab" data-toggle="tab">Alumni</a></li>
                                      </ul>
                                      </div>
                                  </Row>
                                  <TabContent activeTab={this.state.studentTab}>
                                      <TabPane tabId="0">
                                          <Row style={{margin:"0rem",textAlign:"left"}}>
                                              {this.createSubjectMembersList(item.students)}
                                          </Row>
                                      </TabPane>
                                      <TabPane tabId="1">
                                          <Row style={{margin:"0rem",textAlign:"left"}}>
                                              {this.createSubjectMembersList(item.alumni)}
                                          </Row>
                                      </TabPane>
                                  </TabContent>
                              </TabPane>
                          </TabContent>
                    </Row>
                </TabPane>
            );
        })
    }

    render() {
        return(
          <div style={{backgroundColor:"#f8f8f8"}}>
            <Container style={{maxWidth:"86%",padding:"1rem 0rem"}}>
            <Row>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} style={{textAlign:"left"}}>
                    <Card>
                        <CardHeader style={tabTitleStyle}><a href="/homepage" style={{color:"black"}}><FontAwesome className='super-crazy-colors' name='home'/>&nbsp;&nbsp;&nbsp;Homepage</a></CardHeader>
                        <CardHeader style={{color:"black",cursor:"pointer",backgroundColor:"white",textAlign:"left",lineHeight:"250%"}} onClick={() => { this.toggle(1); }}><img src={this.props.userInfo.college.imgUrl} alt='media' style={{width:"50px",borderRadius:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.userInfo.college.name}</CardHeader>
                        <CardBody style={{padding:"0rem"}}>
                            <ul className="list-unstyled custom-tabs-vertical" role="tablist" style={{marginBottom:"0"}}>
                                {this.createSubjectsList()}
                            </ul>
                        </CardBody>
                    </Card>
                    <br/>
                    <p style={commonGrayTextStyle}>2017 Codigo Technologies.</p>
                    <small style={{marginBottom:"0.1rem",fontWeight:"bold"}}><a href="">Terms & Conditions</a></small><br/>
                    <small style={{marginBottom:"0.1rem",fontWeight:"bold"}}><a href="">Privacy Policy</a></small>
                </Col>
                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId={0} key={0}>
                            <MyBlogTab/>
                        </TabPane>
                        <TabPane tabId={1} key={1}>
                            <UniversityInfoTab/>
                        </TabPane>
                        {this.createSubjectTabContents()}
                    </TabContent>
                </Col>
            </Row>
            </Container>
          </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        userInfo : state.userInfo
    }
}

export default connect(mapStateToProps)(HomepageContent);
