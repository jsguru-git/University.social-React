import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    ListGroup,
    ListGroupItem,
    } from 'reactstrap'
import '../../styles/global-styles';

const lightGrayTextStyle = {color:"#aaa"};

const listItemStyle = {border:"0px solid white",padding:"0rem",cursor:"pointer"};
class BagDrawerEventList extends Component{
    checkAttend(item){
        if(item.attended === true)
            return(<Button size="sm" style={{width:"60%"}}>Attended</Button>);
        else
            return(<Button size="sm" style={{width:"60%"}} color="primary">Attend</Button>);
    }

    checkPeople(item) {
        var nPtcn = parseInt(item.participant,10);
        var nAtnd = parseInt(item.attendance,10);
        if(nPtcn > 999) nPtcn = Math.floor(nPtcn/1000) + 'k';
        if(nAtnd > 999) nAtnd = Math.floor(nAtnd/1000) + 'k';
        var nStyle = {color:"rgb(11,141,211)"};
        return(
            <h6><span style={nStyle}>{nPtcn} Participant</span>&nbsp;&nbsp; | &nbsp;&nbsp;<span style={nStyle}>{nAtnd} Attendance</span></h6>
        );
    }

    createListItem() {
        console.log(this.props.eventList);
        return this.props.eventList.map((item) => {
            return (
                <ListGroupItem
                  style={listItemStyle}
                  key={item.ID}
                  >
                    <div style={{display:"flex",alignItems:"center",margin:"0.6rem 0rem"}}>
                        <h4 style={{width:"50%",marginBottom:"0rem",fontWeight:"bold",display:"block"}}>{item.eventDate}</h4>
                        <div style={{width:"50%",display:"block",textAlign:"right"}}>{this.checkAttend(item)}</div>
                    </div>
                    <h6 style={{marginBottom:"0.6rem",color:"#666"}}>{item.title}</h6>
                    <h6 style={lightGrayTextStyle}><small>{item.eventTime.start} - {item.eventTime.end}<br/>{item.content}</small></h6>
                    {this.checkPeople(item)}
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
        eventList : state.eventList
    }
}

export default connect(mapStateToProps)(BagDrawerEventList);
