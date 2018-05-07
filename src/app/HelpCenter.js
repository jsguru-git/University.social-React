import React from 'react'
import { WelcomeHeader } from 'components'
import { HelpCenterContent } from 'components'
import { CommonFooter } from 'components'

import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function HelpCenter() {
  return (
    <Router>
        <Container>
            <WelcomeHeader />
            <HelpCenterContent/>
            <CommonFooter/>
        </Container>
    </Router>
  )
}

export default HelpCenter;
