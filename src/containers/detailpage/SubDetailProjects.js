import React from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap'

var FontAwesome = require('react-fontawesome');
const reactStringReplace = require('react-string-replace')
const commonGrayTextStyle = {color:"#888"};

export default class SubDetailProjects extends React.Component{

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

    renderMedia(media)
    {
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

    createTopCommentList(comments)
    {
        if(comments !== undefined)
        {
            return comments.map((item) => {
                return(
                    <div>
                        <h6 style={{display:"inline-block",fontWeight:"bold",color:"#666"}}>{item.name}</h6>&nbsp;&nbsp;&nbsp;
                        <h6 style={{display:"inline-block",color:"#888"}}>{this.analysisText(item.content)}</h6>
                    </div>
                )
            })
        }
    }

    createSubList(val){
        return val.map((item) => {
            return (
                <li
                  key={item.index}
                  style={{textAlign:"left",lineHeight:"350%"}}
                  >
                    <a role="tab" data-toggle="tab">
                        {item.title}
                    </a>
                </li>
            );
        })
    }
    createBookMarkPanel(bookmarks){
        if(bookmarks === undefined || bookmarks.length === 0) return null;
        else{
            return(<Card>
                <CardHeader style={{backgroundColor:"white",color:"#888",textAlign:"left",padding:"1.4rem 1rem"}}>
                    Bookmarks
                </CardHeader>
                <CardBody style={{padding:"0rem"}}>
                    <ul className="list-unstyled custom-tabs-vertical" role="tablist" style={{marginBottom:"0"}}>
                        {this.createSubList(bookmarks)}
                    </ul>
                </CardBody>
            </Card>);
        }
    }
    render(){
        return(
            <div style={{paddingTop:"1rem"}}>
            <Row>
                <Col xl={8}>
                    <Card style={{textAlign:"left"}}>
                        <CardHeader style={{backgroundColor:"white",padding:"0.6rem 1.5rem"}}>
                            <Row  style={{display:"flex",alignItems:"center"}}>
                                <Col xl={1}>
                                    <img src={this.props.detailData.topProject.imgUrl} alt='media' style={{width:"50px",borderRadius:"30px"}}/>
                                </Col>
                                <Col xl={9}>
                                  <h6 style={{paddingLeft:"1rem",marginBottom:"0"}}>{this.props.detailData.topProject.author}<small style={commonGrayTextStyle}><br/>{this.props.detailData.topProject.job}</small></h6>
                                </Col>
                                <Col xl={2}>
                                    <p style={{marginBottom:"0",color:"#888",textAlign:"right"}}>{this.props.detailData.topProject.postedTime}</p>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody style={{padding:"0"}}>
                            {this.renderMedia(this.props.detailData.topProject.media)}
                            <div  style={{padding:"1rem"}}>
                                <Row style={{padding:"1rem 0rem"}}>
                                    <Col xl={11} style={{display:"flex",alignItems:"center"}}>
                                      <FontAwesome name='star-o' style={{fontSize:"150%",color:"#888"}}/>&nbsp;&nbsp;&nbsp;
                                      <p style={{color:"#666",margin:"0"}}>{this.props.detailData.topProject.favorite}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <FontAwesome className='fa-flip-horizontal' name='comment-o' style={{fontSize:"150%",color:"#888"}}/>&nbsp;&nbsp;&nbsp;
                                      <p style={{color:"#666",margin:"0"}}>{this.props.detailData.topProject.comments}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <FontAwesome className="custom-fa-stroke" name='share' style={{fontSize:"150%",color:"#888"}}/>
                                    </Col>
                                    <Col xl={1} style={{display:"flex",alignItems:"center"}}>
                                        <FontAwesome classname="" name='ellipsis-h' style={{fontSize:"150%",color:"#888"}}/>
                                    </Col>
                                </Row>
                                <small style={commonGrayTextStyle}>{this.props.detailData.topProject.content}</small>
                                <br/><br/>
                                <a href=""><p style={{color:"#888"}}>View All {this.props.detailData.topProject.comments} comments</p></a>
                                {this.createTopCommentList(this.props.detailData.topProject.topComments)}
                                <hr/>
                                <h6 style={{color:"#aaa"}}>Add your comment...</h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4}>
                    {this.createBookMarkPanel(this.props.detailData.bookmarks)}
                </Col>
            </Row>
          </div>
        )
    }
}