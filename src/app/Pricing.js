import React from 'react'
import { WelcomeHeader } from 'components'
import { PricingIntroContent } from 'components'
import { CommonFooter } from 'components'

import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function PricingIntro() {
  return (
    <Router>
        <Container>
            <WelcomeHeader />
            <PricingIntroContent/>
            <CommonFooter/>
        </Container>
    </Router>
  )
}

export default PricingIntro;
