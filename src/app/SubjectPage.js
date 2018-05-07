import React from 'react'

import { LoggedInMiniHeader } from 'components'
import { CommonFooter } from 'components'
import {DashBoardNavigator} from 'components'

import ProgramPageContent from '../containers/programpage/ProgrampageContent'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function ProgramsPage() {
    return (
        <Router>
            <Container>
                <LoggedInMiniHeader/>
                <DashBoardNavigator activeTab="3"/>
                <ProgramPageContent/>       
                <CommonFooter/>
            </Container>
        </Router>
    )
}

export default ProgramsPage;