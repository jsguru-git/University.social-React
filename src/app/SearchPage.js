import React from 'react'

import { LoggedInHeader } from 'components'
import SearchPageContent from 'components/searchpage/index'

import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function SearchPage() {
  return (
    <Router>
      <Container>
        <LoggedInHeader searchKey="Marketing Fundamentals"/>
        <SearchPageContent/>
      </Container>
    </Router>
  )
}

export default SearchPage;
