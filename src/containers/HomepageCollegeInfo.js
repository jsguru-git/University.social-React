import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListGroup,
    ListGroupItem,
    } from 'reactstrap'
import '../styles/global-styles'

const grayTextStyle = {color:"#666"};
const lightGrayTextStyle = {color:"#aaa"};

const listItemStyle = {border:"0px solid white",paddingLeft:"0em",paddingRight:"0em",cursor:"pointer"};
class HomepageCollegeInfo extends Component{
    createListItem(){
        return this.props.assignmentList.map((item) => {
            return (
                <ListGroupItem
                  style={listItemStyle}
                  key={item.ID}
                  >
                    <div style={{display:"flex",alignItems:"center"}}>
                        <label className="custom-check">{item.title}
                            <input type="checkbox" checked={item.submitted}/>
                            <span className="checkmark"></span>
                        </label>
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

export default connect(mapStateToProps)(HomepageCollegeInfo);
