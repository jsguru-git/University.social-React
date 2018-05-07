import React from 'react';
import {
    Col,
    Row,
    Card,
} from 'reactstrap';

import 'react-input-range/lib/css/index.css';
import '../../styles/global-styles'
import {connect} from 'react-redux';

const reactStringReplace = require('react-string-replace')
var FontAwesome = require('react-fontawesome');

const commonGrayTextStyle = {color:"#888"};

class CollegeSearchResult extends React.Component {
   checkRate(item){
        let tmp = "";

        for(var i = 0 ; i < parseInt(item.content.rate,10) ;i++)
            tmp += '*';

        for(i = 0 ; i < (5-parseInt(item.content.rate,10)) ; i++)
            tmp += '-';

        tmp = reactStringReplace(tmp, '*', (match, i) => (
            <FontAwesome name='star' style={{fontSize:"120%",color:"rgb(255,210,3)",display:"inline-block"}}/>
        ));

        //ok
        tmp = reactStringReplace(tmp, '-', (match, i) => (
            <FontAwesome name='star-o' style={{fontSize:"120%",color:"rgb(255,210,3)",display:"inline-block"}}/>
        ));
        return tmp;
    }
    createCollegeList() {
        return this.props.searchRes.map((item) => {
            if(item.type === 'college')
            return(
              <div key={item.index}>
                <Card style={{padding:"0.6rem",marginBottom:"0.4rem"}}>
                    <Row style={{display:"flex",alignItems:"center"}}>
                        <Col xl={2}>
                            <img src={item.content.imgUrl} alt='media' style={{width:"80px"}}/>
                        </Col>
                        <Col xl={6} style={{textAlign:"left"}}>
                            {item.content.name}
                            <small style={commonGrayTextStyle}><br/>{item.content.address}</small>
                        </Col>
                        <Col xl={4}>
                            {this.checkRate(item)}
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
                {this.createCollegeList()}
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
export default connect(mapStateToProps)(CollegeSearchResult);
