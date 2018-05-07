import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListGroup,
    ListGroupItem,
    } from 'reactstrap'
import '../../styles/global-styles';

const grayTextStyle = {color:"#888"};
const lightGrayTextStyle = {color:"#aaa"};

const listItemStyle = {border:"0px solid white",padding:"0rem",cursor:"pointer"};
class BagDrawerReportList extends Component{
    checkMark(item){
        var rate = parseInt(item.score,10) / parseInt(item.limit,10);
        console.log('rate is',rate);
        var markStyle;
        if(rate >= 0.7) markStyle = {color:"rgb(28,177,28)"};
        else if(rate >= 0.4) markStyle = {color:"rgb(226,226,28)"};
        else markStyle = {color:"rgb(226,28,28)"};
        return (<h3 style={{fontWeight:"bold",marginBottom:"0rem"}}><span style={markStyle}>{item.score}</span><span style={grayTextStyle}> / {item.limit}</span></h3>);
    }

    createListItem() {
        console.log(this.props.reportList);
        return this.props.reportList.map((item) => {
            if(item.type === 'test')
                return (
                    <ListGroupItem
                    style={listItemStyle}
                    key={item.ID}
                    >
                        <div style={{display:"flex",alignItems:"center",margin:"1rem 0rem"}}>
                            <div style={{width:"30%",marginBottom:"0rem",fontWeight:"bold",display:"block"}}>
                                {this.checkMark(item)}
                            </div>
                            <div style={{width:"70%",display:"block"}}>
                                <h5>{item.title}</h5>
                                <span style={lightGrayTextStyle}>{item.subTitle}</span>
                            </div>
                        </div>
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
        reportList : state.reportList
    }
}

export default connect(mapStateToProps)(BagDrawerReportList);
