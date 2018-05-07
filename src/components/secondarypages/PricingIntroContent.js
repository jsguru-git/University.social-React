import React from 'react'
import {BottomSubscribe} from 'components'

export default class PricingIntroContent extends React.Component {
    render() {
        return(
            <div>
                <div style={{width:"40%",padding:"3rem 0rem",marginLeft:"30%"}}>
                    <h1 style={{padding:"3rem 0rem",fontSize:"3rem"}}><b>Pricing Plan</b></h1>
                    <h6 style={{color:"#888"}}>The pricing and the registration is for the college administrative department only, the student is been charged by the university as they add the members to the network.</h6>
                </div>
                <BottomSubscribe/>
            </div>
        )
    }
}