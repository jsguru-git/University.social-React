import {combineReducers} from 'redux'

import HeaderMessageNotifier from './header/HeaderMessageNotifier'
import HeaderAlertNotifier from './header/HeaderAlertNotifier'

import AssignmentList from './HeaderBag/Assignments'
import EventList from './HeaderBag/Events'
import ReportList from './HeaderBag/Reports'

import UserProfileInfo from './UserProfileInfo'
import FilteredSearchResult from './filter/FilteredSearchResult'
import SkillList from './filter/SkillList'

import LocationList from './filter/LocationList'
import FileTypeList from './filter/FileTypeList'
import SubjectList from './filter/SubjectList'
import TagList from './filter/TagList'

import SelectedFileItem from './detaildata/SelectedFileItem'
import DetailSelectedItem from './detaildata/DetailData'

import CollegeSubjects from './programs/CollegeSubjects'
import MemberList from './memberpage/MemberList'
const allReducers = combineReducers({
    messageNotifications: HeaderMessageNotifier,
    alertNotifications: HeaderAlertNotifier,

    assignmentList : AssignmentList,
    eventList : EventList,
    reportList : ReportList,

    userInfo : UserProfileInfo,
    filteredSearchRes : FilteredSearchResult,
    skillList : SkillList,
    locationList : LocationList,
    filetypeList : FileTypeList,
    subjectList : SubjectList,
    tagList : TagList,
    
    selectedFileItem : SelectedFileItem,
    detailSelectedItem : DetailSelectedItem,

    collegeSubjects : CollegeSubjects,
    memberList : MemberList,
});

export default allReducers;
