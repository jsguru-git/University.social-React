import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card} from 'reactstrap'

import AdminList from './AdminList'
import FacultyList from './FacultyList'
import StudentList from './StudentList'

class MembersPageContent extends Component{
    
    render(){
        return(
            <div style={{width:"86%",marginLeft:"7%"}}>
                <Row style={{margin:"1rem 0rem"}}>
                    <Col xl={12}>
                        <Card style={{padding:"1.3rem 2rem",margin:"1rem 0rem"}}>
                            <Row >
                                <Col xl={6} style={{textAlign:"left",alignItem:"left"}}>
                                    <Breadcrumb style={{marginBottom:"0rem",backgroundColor:"white"}}>
                                        <BreadcrumbItem style={{fontSize:"1.2rem"}}><a href="/programs" style={{textDecoration:"none",color:"#444"}}><b>College Members</b></a></BreadcrumbItem>
                                    </Breadcrumb>
                                </Col>
                                <Col xl={6} style={{textAlign:"right"}}>
                                    <Button size="lg" color='primary'>ADD MEMBER</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row style={{margin:"1rem 0rem"}}>
                    <Col xl={4}>
                        <StudentList data = {this.props.memberList.students}/>
                    </Col>
                    <Col xl={4}>
                        <FacultyList data = {this.props.memberList.faculties}/>
                    </Col>
                    <Col xl={4}>
                        <AdminList data = {this.props.memberList.admins}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        memberList : state.memberList
    }
}

export default connect(mapStateToProps)(MembersPageContent);
