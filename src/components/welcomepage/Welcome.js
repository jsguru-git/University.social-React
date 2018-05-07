import React from 'react'
import {Introductions} from "components"
import {Medias} from "components"
import {Row} from 'reactstrap'
function Welcome() {
  return (
      <div>

          <Row className="container-fluid" style={{paddingTop:"5rem",paddingBottom:"10rem"}}>
              <Medias/>
              <Introductions/>
          </Row>
      </div>
  )
}

export default Welcome
