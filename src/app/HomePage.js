import React from 'react'

import { LoggedInHeader } from 'components'
import { CommonFooter } from 'components'
import HomepageContent from '../containers/homepage'

import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function HomePage() {
  return (
    <Router>
      <Container>
        <LoggedInHeader />
        <HomepageContent />
        <CommonFooter/>
      </Container>
    </Router>
  )
}

export default HomePage;
