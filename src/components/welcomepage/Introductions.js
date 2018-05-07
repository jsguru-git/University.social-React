import React from 'react'
import {Subscribe} from 'components'
import {Col} from 'reactstrap'
export default class Introduction extends React.Component {
  render(){
    return(
        <Col xl={{size:5,offset:0}}>
            <h1 style={{textAlign:"left",lineHeight:"0.8"}}><b className="display-4" style={{fontWeight:"1000"}}>Connecting College's Globally</b><br/><br/><small style={{color:"#888",fontSize:"47%"}}>University.social is multi-purpose digital platform for University students to connect, network, learn and grow their professional and academic careers on. Students can scroll through universtiy news, get alerts, submit assignments- it provides all the features of a premium Learning Management System.</small></h1>
            <br/>
            <br/>
            <Subscribe/>
        </Col>
    )
  }
}
