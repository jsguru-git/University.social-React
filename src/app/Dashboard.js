import React from 'react'

import { LoggedInMiniHeader } from 'components'
import { DashBoardNavigator } from 'components'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function MembersPage() {
    return (
        <Router>
            <Container>
                <LoggedInMiniHeader/>
                <DashBoardNavigator activeTab="1"/>
            </Container>
        </Router>
    )
}

export default MembersPage;