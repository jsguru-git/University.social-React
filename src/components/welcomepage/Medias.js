import React from 'react'
import {Col} from 'reactstrap'

function Medias() {
    return(
        <Col xl={{size:6}} lg={{size:6}} md={6} sm={{size:12}} xs={{size:12}} style={{paddingTop:"6rem",paddingBottom:"6rem"}} className="embed-responsive">
            <iframe title="media" src="http://www.youtube.com/embed/W7qWa52k-nE" className="embed-responsive-item" style={{padding:"4rem 14%"}} allowFullScreen></iframe>
            <br/><br/><br/><br/>
        </Col>
    )
}

export default Medias
