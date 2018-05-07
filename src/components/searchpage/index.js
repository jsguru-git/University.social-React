import React,{Component} from 'react';
import {
    Container,
    Col,
    Row,
    Card,
    TabPane,
    TabContent
} from 'reactstrap';

import classnames from 'classnames';
import Drawer from 'material-ui/Drawer';

import DetailFileItem from '../../containers/searchpage/details/DetailFileItem'
import SearchFilterContent from '../../containers/searchpage/SearchFilter'

import PeopleSearchResult from '../../containers/searchpage/PeopleSearchResult'
import CollegeSearchResult from '../../containers/searchpage/CollegeSearchResult'
import FileSearchResult from '../../containers/searchpage/FileSearchResult'

import PrimaryNewsWidget from '../../containers/PrimaryNewsWidget'

import SecondaryNewsWidget from '../../containers/SecondaryNewsWidget'

import '../../styles/global-styles'

var FontAwesome = require('react-fontawesome');

class SearchPageContent extends Component {
    constructor(props) {
        super(props);

        this.state={
            tabIndex:'0',
            filterMinLevel : 0,
            filterMaxLevel : 100,
            filterLevelValue: { min: 10, max: 67 },
            fileFilterOption:[],
            subjectFilterOption:[],
            skillFilterOption:[],
            tagFilterOption:[],
            locationFilterOption:[],
            drawerStatus:false
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
    }

    toggleDrawer = () => {
        this.setState({drawerStatus: !this.state.drawerStatus});
        setTimeout(function(){
            var elem = document.getElementById("detail_for_file_item").parentElement;
            elem.style.top = '20px';
            elem.style.left = '50px';
            elem.style.width = (window.innerWidth - 100) + 'px';
            elem.style.height = (window.innerHeight - 40) + 'px';
        },50);
    }

    closeDrawer = () => {
        this.setState({drawerStatus: false});
    }

    setTabIndex(val) {
        this.setState({
            tabIndex : val
        })
    }
    selectedItem(event) {
        this.toggleDrawer();
    }
    render() {
        return(
            <div style={{backgroundColor:"#f8f8f8"}}>
                <Container style={{maxWidth:"86%",padding:"1rem 0rem"}}>
                    <Row>
                        <Col xl={3} style={{textAlign:"left"}}>
                            <SearchFilterContent/>
                        </Col>
                        <Col xl={9}>
                            <Card>
                                <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0"}}>
                                    <li className={classnames({ active: this.state.tabIndex === '0' })} onClick={() => this.setTabIndex('0')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">Files</a></li>
                                    <li className={classnames({ active: this.state.tabIndex === '1' })} onClick={() => this.setTabIndex('1')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">People</a></li>
                                    <li className={classnames({ active: this.state.tabIndex === '2' })} onClick={() => this.setTabIndex('2')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">Colleges</a></li>
                                </ul>
                            </Card>
                            <br/>
                            <Row>
                                <Col xl={8}>
                                    <TabContent activeTab={this.state.tabIndex}>
                                        <TabPane tabId='0'>
                                            <FileSearchResult onClickFileItem={this.selectedItem}/>
                                        </TabPane>
                                        <TabPane tabId='1'>
                                            <PeopleSearchResult/>
                                        </TabPane>
                                        <TabPane tabId='2'>
                                            <CollegeSearchResult/>
                                        </TabPane>
                                    </TabContent>
                                </Col>
                                <Col xl={4}>
                                    <PrimaryNewsWidget/>
                                    <br/>
                                    <SecondaryNewsWidget/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Drawer
                    type="temporary"
                    anchor="right"
                    open={this.state.drawerStatus}>
                    <div id='detail_for_file_item' style={{padding:"4rem"}}>
                        <Row>
                            <Col xl={1} style={{textAlign:"center"}}>
                            <FontAwesome
                                className='light-font-icon'
                                name='arrow-circle-o-left'
                                style={{fontSize:"80px",color:"rgb(11,141,211)",cursor:"pointer"}}
                                onClick={()=>this.closeDrawer()}
                            />
                            </Col>
                            <Col xl={{size:9,offset:1}}>
                                <DetailFileItem/>
                            </Col>
                        </Row>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default SearchPageContent;