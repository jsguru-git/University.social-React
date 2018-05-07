import React from 'react';
import {
    Col,
    Row,
    Card,
    } from 'reactstrap';

import {SelectFileListItem} from '../../actions/selectFileListItem'
import {bindActionCreators} from 'redux';
import 'react-input-range/lib/css/index.css';
import '../../styles/global-styles'
import {connect} from 'react-redux';

var FontAwesome = require('react-fontawesome');

const commonGrayTextStyle = {color:"#888"};

class FileSearchResult extends React.Component {
    createFileList() {
        return this.props.searchRes.map((item) => {
            if(item.type === 'file')
            return(
                <div key={item.index}>
                    <Card style={{padding:"0.6rem",marginBottom:"0.4rem",cursor:"pointer"}}  onClick={()=>{this.props.onClickItem(item);this.props.onClickFileItem()}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={3}>
                                <img src={item.content.preview} alt='preview media' style={{width:"100%"}}/>
                            </Col>
                            <Col xl={9} style={{textAlign:"left"}}>
                                <h6 style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                                    {item.content.content}
                                </h6>
                                <h6 style={commonGrayTextStyle}>
                                    FILE TYPE : {item.subType}
                                </h6>
                                <hr style={{margin:"0.3rem 0rem"}}/>
                                <Row style={{display:"flex",alignItems:"center"}}>
                                    <Col xl={1}><img src={item.content.author.imgUrl} alt='media' style={{width:"40px",borderRadius:"20px"}}/></Col>
                                    <Col xl={4} style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",marginLeft:"1rem"}}>
                                        {item.content.author.name}
                                        <small style={commonGrayTextStyle}><br/>{item.content.author.job}</small>
                                    </Col>
                                    <Col xl={6}>
                                        <Row style={{display:"flex",alignItems:"center"}}>
                                            <Col xl={6}>
                                                <FontAwesome name='star-o' style={{fontSize:"120%",color:"#888",display:"inline-block"}}/>&nbsp;
                                                <h6 style={{color:"#666",margin:"0",display:"inline-block"}}>{item.content.favorite}</h6>
                                            </Col>
                                            <Col xl={6}>
                                                <FontAwesome className="fa-flip-horizontal" name='comment-o' style={{fontSize:"120%",color:"#888",display:"inline-block"}}/>&nbsp;
                                                <h6 style={{color:"#666",margin:"0",display:"inline-block"}}>{item.content.comments}</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
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
                {this.createFileList()}
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
    return bindActionCreators({onClickItem : SelectFileListItem },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(FileSearchResult);
