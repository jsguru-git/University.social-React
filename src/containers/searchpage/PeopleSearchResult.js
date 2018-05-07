import React from 'react';
import {
    Col,
    Row,
    Card,
} from 'reactstrap';
import {SelectPeopleListItem} from '../../actions/selectPeopleListItem'
import {bindActionCreators} from 'redux';
import 'react-input-range/lib/css/index.css';
import '../../styles/global-styles'
import {connect} from 'react-redux';

var FontAwesome = require('react-fontawesome');

const commonGrayTextStyle = {color:"#888"};

class PeopleSearchResult extends React.Component {
    checkFollowing(item){
        if(item.content.following !== true)
            return(
                <FontAwesome name='user-plus' style={{fontSize:"120%",color:"#888"}}/>
            )
    }
    createPeopleList() {
        return this.props.searchRes.map((item) => {
            if(item.type === 'people')
            return(
              <div key={item.index}>
                <Card style={{padding:"0.6rem",marginBottom:"0.4rem",cursor:"pointer"}} onClick={() => {this.props.onClickItem(item)}}>
                    <Row style={{display:"flex",alignItems:"center"}}>
                        <Col xl={2}>
                            <img src={item.content.imgUrl} alt='media' style={{width:"60px",borderRadius:"30px"}}/>
                        </Col>
                        <Col xl={8} style={{textAlign:"left"}}>
                            {item.content.name}
                            <small style={commonGrayTextStyle}><br/>{item.content.job}</small>
                        </Col>
                        <Col xl={1}>
                            {this.checkFollowing(item)}
                        </Col>
                    </Row>
                </Card>
              </div>
            )
        })
    }
    render() {
        return(
            <div>
                {this.createPeopleList()}
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        searchRes : state.filteredSearchRes
    }
}
function matchDispatchToProps(dispatch)
{
    return bindActionCreators({onClickItem : SelectPeopleListItem },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(PeopleSearchResult);
