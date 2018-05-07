import React from 'react'
import {BottomSubscribe} from 'components'

export default class WhyChooseUsContent extends React.Component {
    render() {
        return(
            <div className="special-div-different-color">
                <div style={{width:"60%",padding:"3rem 0rem",marginLeft:"20%"}}>
                    <h1 style={{padding:"3rem 0rem",fontSize:"4.5rem"}}><b>Connection crafted to get yourself perfected</b></h1>
                    <img src="imgs/1.png" alt="img" style={{width:"100%"}}/>
                </div>
                <BottomSubscribe/>
            </div>
        )
    }
}