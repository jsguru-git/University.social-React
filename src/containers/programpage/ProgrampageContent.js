import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Row,
    Col,
    Card,
    Button
} from 'reactstrap';

import {courseSelected} from '../../actions/courseSelected'

class ProgramPageContent extends React.Component {
    createCatetories(){
        return this.props.collegeSubjects.map((item) => {
            return(
                <Col xl={3} style={{margin:"1rem 0rem"}}>
                    <Card style={{padding:"1.6rem 0rem",cursor:"pointer"}} onClick={()=>{this.props.clickItem(item)}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={3}><img src={item.imgUrl} alt='media' style={{width:"3.6rem"}}/></Col>
                            <Col xl={9} style={{textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                                <h5 style={{marginBottom:"0"}}>
                                    {item.category}
                                </h5><hr style={{margin:"0.9rem 0rem"}}/>
                                <h6 style={{marginBottom:"0",color:"#888"}}>
                                    {item.courses} COURSES
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
                            <Col xl={6} style={{textAlign:"left"}}>
                                <h5 style={{marginBottom:"0rem",lineHeight:"3rem"}}><b>College Programmes</b></h5>
                            </Col>
                            <Col xl={6} style={{textAlign:"right"}}>
                                <Button size="lg" color='primary'>ADD MEMBER</Button>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
                <Row style={{margin:"1rem 0rem"}}>
                    {this.createCatetories()}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        collegeSubjects : state.collegeSubjects
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({clickItem : courseSelected },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ProgramPageContent);