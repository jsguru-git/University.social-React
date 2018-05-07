import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem} from 'reactstrap'

import {selectHeaderMessageNotificationItem} from '../../actions/selectHeaderMessageNotificationItem'
const grayTextStyle = {color:"#888"};
const listItemStyle = {border:"0px solid white",paddingLeft:"0em",paddingRight:"0em",cursor:"pointer"};
class HeaderMessageList extends Component{
    createListItem(){
        return this.props.messageNotifications.map((item) => {
            return (
                <ListGroupItem
                  style={listItemStyle}
                  key={item.messageID}
                  onClick={() => this.props.clickItem(item)}>
                    <Row style={{display:"flex",alignItems:"center"}}>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}><small style={grayTextStyle}>{item.date}</small></Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}><img src={item.imgUrl} alt='media' style={{width:"40px",borderRadius:"20px"}}/></Col>
                        <Col xl={7} lg={7} md={7} sm={7} xs={7} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>{item.name}<small style={grayTextStyle}><br/>{item.content}</small></Col>
                    </Row>
                </ListGroupItem>
            );
        })
    }

    render(){
        return(
          <ListGroup style={{height:"auto",maxHeight:"240px",overflowX:"hidden",padding:"10px"}}>
              {this.createListItem()}
          </ListGroup>
        )
    }
}

function mapStateToProps(state)
{
    return{
        messageNotifications : state.messageNotifications
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({clickItem : selectHeaderMessageNotificationItem },dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(HeaderMessageList);
