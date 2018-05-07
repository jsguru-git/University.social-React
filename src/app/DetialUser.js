import React from 'react'

import { LoggedInHeader } from 'components'
import { CommonFooter } from 'components'

import { BrowserRouter as Router } from 'react-router-dom'
import DetailpageContent from '../components/detailpage/index'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function DetailUser() {
  return (
    <Router>
      <Container>
        <LoggedInHeader />
        <DetailpageContent/>
        <CommonFooter/>
      </Container>
    </Router>
  )
}

export default DetailUser;
