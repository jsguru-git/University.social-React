import React from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    Row,
    Col,
    Card,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

var FontAwesome = require('react-fontawesome');
const grayTextStyle = {color:"#888"};

class SubjectContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item : reactLocalStorage.getObject('u.s-subject')
        }
        console.log(this.state.item)
    }
    createSubjectList(val){
        if(val === undefined || val.length === 0) return null;
        else{
            return val.map((item) => {
                return(
                    <Col xl={4}>
                        <Card style={{padding:"1rem",margin:"1rem 0rem"}}>
                            <Row style={{display:"flex",alignItems:"center"}}>
                                <Col xl={2}><img src={item.lecturerImg} alt='media' style={{width:"3rem",borderRadius:"2rem"}}/></Col>
                                <Col xl={8} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                                    <h6><b>{item.name}</b></h6>
                                    <span style={grayTextStyle}>Major Skill : {item.majorSkill}</span>
                                </Col>
                                <Col xl={2}>
                                    <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='pencil' style={{fontSize:"200%",color:"rgb(11,141,211)"}}/></a>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                )
            })
        }
    }
    
    createSemesters(val){
        if(val === undefined || val.length === 0) return null;
        else{
            return val.map((item) =>{
                return(
                    <div align="left">
                        <h5 style={{lineHeight:"300%"}}><b>SEMESTER {item.index}</b></h5>
                        <Row>
                        {this.createSubjectList(item.subjects)}
                        </Row>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div style={{width:"86%",marginLeft:"7%"}}>
                <Row style={{margin:"1rem 0rem"}}>
                    <Col xl={12}>
                    <Card style={{padding:"1.3rem 2rem",margin:"1rem 0rem"}}>
                        <Row >
                            <Col xl={6} style={{textAlign:"left",alignItem:"left"}}>
                                <Breadcrumb style={{marginBottom:"0rem",backgroundColor:"white"}}>
                                    <BreadcrumbItem style={{fontSize:"1.2rem"}}><a href="/programs" style={{textDecoration:"none",color:"#888"}}>College Programmes</a></BreadcrumbItem>
                                    <BreadcrumbItem style={{fontSize:"1.2rem"}}><a href="/course" style={{textDecoration:"none",color:"#888"}}>{this.state.item.tags[0]}</a></BreadcrumbItem>
                                    <BreadcrumbItem style={{fontSize:"1.2rem"}}><a href="" style={{textDecoration:"none",color:"#888"}}>{this.state.item.tags[1]}</a></BreadcrumbItem>
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
                    <Col xl={12}>
                    <Card style={{padding:"2rem",margin:"1rem 0rem"}}>
                        {this.createSemesters(this.state.item.semesters)}
                    </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SubjectContent;