import React from 'react'
import {
    Row,
    Col,
    Card,
    TabContent,
    TabPane
} from 'reactstrap'
import classnames from 'classnames'

const commonGrayTextStyle = {color:"#888"};
export default class SubDetailMembers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navigationTabIndex : '0'
        }
    }

    setNavigationTabIndex(val){
        this.setState({
            navigationTabIndex:val
        });
    }

    createMemberList(val){
        return val.map((item) => {
            return(
                <Col xl={4}>
                    <Card style={{padding:"0.6rem 1rem",marginBottom:"1rem"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={3} style={{textAlign:"center"}}>
                                <img src={item.imgUrl} alt='media' style={{width:"3rem",borderRadius:"2rem"}}/>
                            </Col>
                            <Col xl={8}>
                                <h6 style={{textAlign:"left",marginBottom:"0rem"}}>{item.name}
                                    <small style={commonGrayTextStyle}><br/>{item.title}</small>
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
            <div style={{paddingTop:"1rem",textAlign:"center"}}>
                <div style={{width:"80%",paddingLeft:"20%"}}>
                    <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                        <li className={classnames({ active: this.state.navigationTabIndex === '0' })} onClick={() => this.setNavigationTabIndex('0')} style={{width:"50%",textAlign:"center"}}><a role="tab" data-toggle="tab">Followers</a></li>
                        <li className={classnames({ active: this.state.navigationTabIndex === '1' })} onClick={() => this.setNavigationTabIndex('1')} style={{width:"50%",textAlign:"center"}}><a role="tab" data-toggle="tab">Followings</a></li>
                    </ul>
                </div>
                <br/>
                <div>
                    <TabContent activeTab={this.state.navigationTabIndex}>
                        <TabPane tabId='0'>
                            <Row>
                                {this.createMemberList(this.props.detailData.followers)}
                            </Row>
                        </TabPane>
                        <TabPane tabId='1'>
                            <Row>
                                {this.createMemberList(this.props.detailData.followings)}
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}