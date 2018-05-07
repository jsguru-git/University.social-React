import React from 'react'
import {createBrowserHistory} from 'history'
import {Router, Route} from 'react-router-dom'

import WelcomePage from '../app/WelcomePage'
import WhyChooseUs from '../app/WhyChooseUs'
import PricingIntro from '../app/Pricing'
import HelpCenter from '../app/HelpCenter'
import HomePage from '../app/HomePage'
import SearchPage from '../app/SearchPage'
import DetailUser from '../app/DetialUser'

import ProgramsPage from '../app/ProgramsPage'
import CoursePage from '../app/CoursePage'
import SubjectDetailPage from '../app/SubjectDetailPage'

import MembersPage from '../app/MembersPage'
import Dashboard from '../app/Dashboard';
import test from '../app/test'
const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/welcome" component={WelcomePage}/>
            <Route path="/why-choose-us" component={WhyChooseUs}/>
            <Route path="/pricing" component={PricingIntro}/>
            <Route path="/help-center" component={HelpCenter}/>

            <Route path="/homepage" component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
            
            <Route path="/programs" component={ProgramsPage}/>
            <Route path="/course" component={CoursePage}/>
            <Route path="/subject" component={SubjectDetailPage}/>

            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/members" component={MembersPage}/>
            <Route path={/details/} component={DetailUser}/>

            <Route path="/test" component={test}/>
        </div>
    </Router>
);

export default Routes;
