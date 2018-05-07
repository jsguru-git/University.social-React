import React from 'react'

import { LoggedInMiniHeader } from 'components'
import {DashBoardNavigator} from 'components'

import MembersPageContent from '../containers/memberpage/MembersPageContent'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function MembersPage() {
    return (
        <Router>
            <Container>
                <LoggedInMiniHeader/>
                <DashBoardNavigator activeTab="2"/>
                <MembersPageContent/>
            </Container>
        </Router>
    )
}

export default MembersPage;