import React from 'react';
import {
    Container,
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    TabPane,
    TabContent
} from 'reactstrap';

import DetailContent from '../../containers/detailpage/DetailContent';
import UniversityInfoTab from '../../containers/homepage/UniversityInfoTab'
import '../../styles/global-styles'
import classnames from 'classnames';

import {connect} from 'react-redux';


var FontAwesome = require('react-fontawesome');

const tabTitleStyle = {color:"black",backgroundColor:"white",textAlign:"left",lineHeight:"300%"};
const commonGrayTextStyle = {color:"#888"};

class DetailpageContent extends React.Component {
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
                            <DetailContent/>
                        </TabPane>
                        <TabPane tabId={1} key={1}>
                            <UniversityInfoTab/>
                        </TabPane>
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

export default connect(mapStateToProps)(DetailpageContent);
