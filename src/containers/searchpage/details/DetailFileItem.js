import React,{Component} from 'react';
import {connect} from 'react-redux';

import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap';

import FileViewer from 'react-file-viewer';
import ImageSlider from '../../../components/common/Slider'

var FontAwesome = require('react-fontawesome');

const commonGrayTextStyle = {color:"#888"};

class DetailFileItem extends Component {
    createMedia(){
        let item = this.props.fileItem;
        switch(item.subType.toLowerCase()){
            case 'image':
                return(
                    <div>
                        <img src={item.content.preview} alt="preview" style={{width:"100%",padding:"1rem 0rem"}}/>
                    </div>
                );
            case 'project':
                return(
                    <div>
                        <img src={item.content.preview} alt="preview" style={{width:"100%",padding:"1rem 0rem"}}/>
                    </div>
                )
            case 'slider':
                return(<ImageSlider imageList={item.content.sliderList}/>);
            case 'video':
                return(
                    <FileViewer
                        fileType='mp4'
                        filePath={item.content.path}
                    />                
                )
            case 'document':
                console.log(item.content.path);
                if(item.content.path === undefined || item.content.path === '') break;
                var subStr = item.content.path.split('.');
                var fileExtension = subStr[subStr.length-1].toLowerCase();

                switch(fileExtension)
                {
                    case 'pdf' :
                        return(<iframe src={item.content.path} title={item.content.path} style={{maxHeight:"600px",height:"600px"}}/>);
                    case 'docx' :
                        return(
                        <FileViewer
                            fileType='docx'
                            filePath={item.content.path}
                            style={{maxHeight:"500px"}}
                        /> );
                    default:
                        return(<div></div>);
                }
            default:
                return(<div></div>);
        }
    }
    getSummaryOfContent(str)
    {
        var tmp = str.substring(0,180) + '...';
        return tmp;
    }
    createCommentList(){
        var comments = this.props.fileItem.content.allComments;
        if(comments === undefined || comments.length === 0) return(<div></div>);
        else{
            console.log('asdf');
            return comments.map((item) => {
                console.log(item);
                return(
                    <div style={{padding:"0.5rem 0rem",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}>
                        <img src={item.writer.imgUrl} alt='writer' style={{width:"40px",borderRadius:"30px"}}/>&nbsp;&nbsp;
                        {item.writer.name}&nbsp;:&nbsp;
                        <span style={{color:"#888"}}>{item.content}</span>
                    </div>
                )
            })
        }
    }
    render() {
        if(this.props.fileItem.length === 0) return(<div></div>);
        else
        return(
            <Row>
                <Col xl={7}>
                    <Card style={{padding:"2rem 2rem",textAlign:"center",alignItem:"center"}}>
                        <h1>
                            <b>{this.props.fileItem.content.title}</b>
                        </h1>
                        <br/><br/>
                        {this.createMedia()}
                        <br/><br/>
                        <h2>
                            {this.props.fileItem.content.subTitle}
                        </h2>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card style={{padding:"0rem"}}>
                    <CardHeader style={{backgroundColor:"white",borderTop:"1px solid lightgray"}}>
                        <Row style={{display:"flex",alignItems:"center"}}>
                            <Col xl={2}>
                                <img src={this.props.fileItem.content.author.imgUrl} alt='media' style={{width:"60px",borderRadius:"30px"}}/>
                            </Col>
                            <Col xl={8} style={{textAlign:"left"}}>
                                {this.props.fileItem.content.author.name}
                                <small style={commonGrayTextStyle}><br/>{this.props.fileItem.content.author.job}</small>
                            </Col>
                        </Row>
                        <br/>
                        <div style={{color:"#333"}}>
                            {this.getSummaryOfContent(this.props.fileItem.content.content)}
                        </div>
                        <br/>
                        <Row>
                            <Col xl={4}>
                                <FontAwesome name='star-o' style={{fontSize:"120%",color:"#888",display:"inline-block"}}/>&nbsp;
                                <h6 style={{color:"#666",margin:"0",display:"inline-block"}}>{this.props.fileItem.content.favorite}</h6>
                            </Col>
                            <Col xl={4}>
                                <FontAwesome className="fa-flip-horizontal" name='comment-o' style={{fontSize:"120%",color:"#888",display:"inline-block"}}/>&nbsp;
                                <h6 style={{color:"#666",margin:"0",display:"inline-block"}}>{this.props.fileItem.content.comments}</h6>
                            </Col>
                            <Col xl={4}>
                            <FontAwesome className="custom-fa-stroke" name='share' style={{fontSize:"120%",color:"#888",display:"inline-block"}}/>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {this.createCommentList()}
                    </CardBody>
                    <CardFooter style={{backgroundColor:"white",color:"#888"}}>
                        <a>Add Comment</a>
                    </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state)
{
    return{
        fileItem : state.selectedFileItem
    }
}

export default connect(mapStateToProps)(DetailFileItem);