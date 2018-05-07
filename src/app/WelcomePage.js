import React from 'react'
import { WelcomeHeader } from 'components'
import { Welcome } from 'components'
import { CommonFooter } from 'components'

import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function WelcomePage() {
  return (
    <Router>
      <Container>
        <WelcomeHeader />
        <Welcome/>
        <CommonFooter/>
      </Container>
    </Router>
  )
}

export default WelcomePage;
