import React from 'react';
import {
    Input,
    TabContent,
    TabPane
} from 'reactstrap';
import classnames from 'classnames'
import {BottomSubscribe} from 'components'

export default class HelpCenterContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tabIndex : '0'
        }
        this.setTabIndex = this.setTabIndex.bind(this);
    }
    setTabIndex(val){
        this.setState({
            tabIndex : val
        })
    }

    render(){
        return(
            <div>
                <div style={{padding:"4rem 0rem",backgroundColor:"rgb(11,141,211)"}}>
                    <h1 style={{color:"white",fontSize:"340%"}}><b>HOW CAN WE HELP?</b></h1>
                    <div style={{width:"50%",marginLeft:"25%",paddingTop:"2rem"}}>
                        <Input size="lg" type="text" placeholder="Please enter your questions..." />
                    </div>
                </div>
                <div style={{backgroundColor:"white",borderBottom:"1px solid #ddd"}}>
                    <div style={{width:"70%",marginLeft:"15%"}}>
                        <ul className="nav custom-tabs" role="tablist" style={{borderBottom:"0",fontSize:"1.3rem"}}>
                            <li className={classnames({ active: this.state.tabIndex === '0' })} onClick={() => this.setTabIndex('0')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">Getting Start</a></li>
                            <li className={classnames({ active: this.state.tabIndex === '1' })} onClick={() => this.setTabIndex('1')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">Knowledge Base</a></li>
                            <li className={classnames({ active: this.state.tabIndex === '2' })} onClick={() => this.setTabIndex('2')} style={{width:"33.333%",textAlign:"center"}}><a role="tab" data-toggle="tab">Community</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <TabContent activeTab={this.state.tabIndex} style={{padding:"10rem 2rem"}}>
                        <TabPane tabId="0">
                            <h1>GETTING START</h1>
                        </TabPane>
                        <TabPane tabId="1">
                            <h1>KNOWLEDGE BASE</h1>
                        </TabPane>
                        <TabPane tabId="2">
                            <h1>COMMUNITY</h1>
                        </TabPane>
                    </TabContent>
                </div>
                <BottomSubscribe/>
            </div>
        )
    }
}