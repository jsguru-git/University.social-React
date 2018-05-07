import React from 'react';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

import PrimaryNewsWidget from '../PrimaryNewsWidget'
import SecondaryNewsWidget from '../SecondaryNewsWidget'

import {connect} from 'react-redux';

const reactStringReplace = require('react-string-replace')

var FontAwesome = require('react-fontawesome');

const commonGrayTextStyle = {color:"#666"};

class MyBlogTab extends React.Component {
    analysisText(text) {
        let tmpText;

        //handclap
        tmpText = reactStringReplace(text, ':handclap:', (match, i) => (
            <div style={{display:"inline-block"}}><img src="imgs/emoticons/handclap.png" alt='media' style={{width:"1.5rem"}}/></div>
        ));

        //ok
        tmpText = reactStringReplace(tmpText, ':ok:', (match, i) => (
            <div style={{display:"inline-block"}}><img src="imgs/emoticons/ok.png" alt='media' style={{width:"1.5rem"}}/></div>
        ));
        return tmpText;
    }

    renderMedia()
    {
        var media = this.props.userInfo.topBlog.media;
        if(media !== undefined)
        {
            switch(media.mediaType)
            {
                case 'img':
                    return(
                        <div>
                            <img src={media.preview} alt='media' style={{width:"100%"}}/>
                        </div>
                    )
                default:
                    return(<div></div>);
            }
        }
    }

    createTopCommentList()
    {
        if(this.props.userInfo.topBlog.topComments !== undefined)
        {
            return this.props.userInfo.topBlog.topComments.map((item) => {
                return(
                    <div>
                        <h6 style={{display:"inline-block",fontWeight:"bold",color:"#666"}}>{item.name}</h6>&nbsp;&nbsp;&nbsp;
                        <h6 style={{display:"inline-block",color:"#888"}}>{this.analysisText(item.content)}</h6>
                    </div>
                )
            })
        }
    }
    render() {
        return(
          <div>
            <Row>
                <Col xl={8}>
                    <Card style={{textAlign:"left"}}>
                        <CardHeader style={{backgroundColor:"white",padding:"0.6rem 1.5rem"}}>
                            <Row  style={{display:"flex",alignItems:"center"}}>
                                <Col xl={1}>
                                    <img src={this.props.userInfo.topBlog.imgUrl} alt='media' style={{width:"50px",borderRadius:"30px"}}/>
                                </Col>
                                <Col xl={9}>
                                  <h6 style={{paddingLeft:"1rem",marginBottom:"0"}}>{this.props.userInfo.topBlog.author}<small style={commonGrayTextStyle}><br/>{this.props.userInfo.topBlog.job}</small></h6>
                                </Col>
                                <Col xl={2}>
                                    <p style={{marginBottom:"0",color:"#888",textAlign:"right"}}>{this.props.userInfo.topBlog.postedTime}</p>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody style={{padding:"0"}}>
                            {this.renderMedia()}
                            <div  style={{padding:"1rem"}}>
                                <Row style={{padding:"1rem 0rem"}}>
                                    <Col xl={11} style={{display:"flex",alignItems:"center"}}>
                                      <FontAwesome name='star-o' style={{fontSize:"150%",color:"#888"}}/>&nbsp;&nbsp;&nbsp;
                                      <p style={{color:"#666",margin:"0"}}>{this.props.userInfo.topBlog.favorite}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <FontAwesome className='fa-flip-horizontal' name='comment-o' style={{fontSize:"150%",color:"#888"}}/>&nbsp;&nbsp;&nbsp;
                                      <p style={{color:"#666",margin:"0"}}>{this.props.userInfo.topBlog.comments}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <FontAwesome className="custom-fa-stroke" name='share' style={{fontSize:"150%",color:"#888"}}/>
                                    </Col>
                                    <Col xl={1} style={{display:"flex",alignItems:"center"}}>
                                        <FontAwesome classname="" name='ellipsis-h' style={{fontSize:"150%",color:"#888"}}/>
                                    </Col>
                                </Row>
                                <small style={commonGrayTextStyle}>{this.props.userInfo.topBlog.content}</small>
                                <br/><br/>
                                <a href=""><p style={{color:"#888"}}>View All {this.props.userInfo.topBlog.comments} comments</p></a>
                                {this.createTopCommentList()}
                                <hr/>
                                <h6 style={{color:"#aaa"}}>Add your comment...</h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4}>
                    <PrimaryNewsWidget/>
                    <br/>
                    <SecondaryNewsWidget/>
                </Col>
            </Row>
          </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        userInfo : state.userInfo
    }
}

export default connect(mapStateToProps)(MyBlogTab);
