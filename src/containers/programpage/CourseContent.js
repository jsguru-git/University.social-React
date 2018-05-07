import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    Row,
    Col,
    Card,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

import {subjectSelected} from '../../actions/subjectSelected'

class ProgramPageContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item : reactLocalStorage.getObject('u.s-course')
        }
        console.log(this.state.item)
    }

    createCourses(val){
        if (val === undefined || val.length === 0) return null;
        return val.map((item) => {
            return(
                <Col xl={3} style={{margin:"1rem 0rem"}}>
                    <Card style={{padding:"1.6rem 0rem",cursor:"pointer"}} onClick={() => {this.props.clickItem(item)}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={3}><img src={this.state.item.imgUrl} alt='media' style={{width:"3.6rem"}}/></Col>
                            <Col xl={9} style={{textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                                <h5>
                                    {item.name}
                                </h5>
                                <h6 style={{marginBottom:"0",color:"#888"}}>
                                    {item.subjects} SUBJECTS
                                </h6>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        })
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
                                    <BreadcrumbItem style={{fontSize:"1.2rem"}}><a href="" style={{textDecoration:"none",color:"#888"}}>{this.state.item.tags[0]}</a></BreadcrumbItem>
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
                    {this.createCourses(this.state.item.allCourses)}
                </Row>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({clickItem : subjectSelected },dispatch);
}

export default connect(null,matchDispatchToProps)(ProgramPageContent);