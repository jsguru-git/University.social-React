import React from 'react'
import {
    Row,
    Col,
    Card,
    Input
} from 'reactstrap';
var FontAwesome = require('react-fontawesome');
const grayTextStyle = {color:"#888"};

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.filterUpdated = this.filterUpdated.bind(this);
        this.state={
            members : this.props.data.members
        }
    }

    filterUpdated(event){
        var updatedList = this.props.data.members;
        updatedList = updatedList.filter(function(item){
            return ((item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1) || (item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1));
        });
        this.setState({members: updatedList});
    }

    createMemberList(list){
        return list.map((item) => {
            return (
                <li
                style={{textAlign:"left",padding:"1rem",cursor:"pointer",borderBottom:"1px solid #ddd"}}
                >
                    <Row style={{display:"flex",alignItems:"center"}}>
                        <Col xl={2}><img src={item.imgUrl} alt='media' style={{width:"3rem",borderRadius:"2rem"}}/></Col>
                        <Col xl={8} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                            <h6 style={{color:"black"}}><b>{item.name}</b></h6>
                            <span style={grayTextStyle}>{item.title}</span>
                        </Col>
                        <Col xl={2}>
                            <a href=""><FontAwesome className='super-crazy-colors' name='pencil' style={{fontSize:"200%",color:"rgb(11,141,211)"}}/></a>
                        </Col>
                    </Row>
                </li>
            );
        })
    }
    render(){
        return(
            <Card style={{padding:"2rem 1rem",textAlign:"left"}}>
                <h5><b style={{color:"#888"}}>TOTAL STUDENTS : <span style={{color:"black"}}>{this.props.data.count}</span></b></h5>
                <br/>
                <Input type="text" placeholder="Search" onChange={this.filterUpdated}/>
                <br/>
                <ul className="list-unstyled custom-tabs-vertical" role="tablist" style={{marginBottom:"0"}}>
                    {this.createMemberList(this.state.members)}
                </ul>
            </Card>
        )
    }
}