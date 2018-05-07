import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListGroup,
    ListGroupItem,
    } from 'reactstrap'
import '../../styles/global-styles'
import Checkbox from 'material-ui/Checkbox';
const grayTextStyle = {color:"#666"};
const lightGrayTextStyle = {color:"#aaa"};

const listItemStyle = {border:"0px solid white",padding:"0rem",cursor:"pointer"};
class BagDrawerAssignmentList extends Component{
    createListItem(){
        console.log(this.props.assignmentList);
        return this.props.assignmentList.map((item) => {
            return (
                <ListGroupItem
                  style={listItemStyle}
                  key={item.ID}
                  >
                    <div style={{display:"flex",alignItems:"center"}}>

                        <Checkbox
                          iconStyle={{fill: 'rgb(11,141,211)'}}
                          style={{color:'rgb(11,141,211)'}}
                          checked={item.submitted}
                          disabled={!item.submitted}
                        />{item.title}
                    </div>
                    <small style={grayTextStyle}>{item.content}</small>
                    <p style={lightGrayTextStyle}>Due Date : {item.deadline}</p>
                    <hr/>
                </ListGroupItem>
            );
        })
    }

    render(){
        return(
          <ListGroup style={{height:"auto",overflowX:"hidden",padding:"10px"}}>
              {this.createListItem()}
          </ListGroup>
        )
    }
}

function mapStateToProps(state)
{
    return{
        assignmentList : state.assignmentList
    }
}

export default connect(mapStateToProps)(BagDrawerAssignmentList);
