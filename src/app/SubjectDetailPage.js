import React from 'react'

import { LoggedInMiniHeader } from 'components'
import {DashBoardNavigator} from 'components'

import SubjectContent from '../containers/programpage/SubjectContent'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function CoursePage() {
    return (
        <Router>
            <Container>
                <LoggedInMiniHeader/>
                <DashBoardNavigator activeTab="3"/>
                <SubjectContent/>
            </Container>
        </Router>
    )
}

export default CoursePage;