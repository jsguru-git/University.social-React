import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody,
    } from 'reactstrap'

import {filterOptionCompleted} from '../../actions/filterOptionCompleted'

import InputRange from 'react-input-range';

import FileTypeSelectField from './filter/FileTypeSelectField'
import SubjectSelectField from './filter/SubjectSelectField'
import SkillSelectField from './filter/SkillSelectField'
import TagSelectField from './filter/TagSelectField'
import LocationSelectField from './filter/LocationSelectField'

const tabTitleStyle = {color:"black",backgroundColor:"white",textAlign:"left",lineHeight:"300%"};
class SearchFilterContent extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            tabIndex:'0',
            filterMinLevel : 0,
            filterMaxLevel : 100,
            filterLevelValue: { min: 0, max: 100 },
            fileFilterOption:[],
            subjectFilterOption:[],
            skillFilterOption:[],
            tagFilterOption:[],
            locationFilterOption:[]
        }
    }

    searchFilterUpdated(){
        let searchFilter = [];
        searchFilter[0] = this.state.filterLevelValue;
        searchFilter[1] = this.state.fileFilterOption;
        searchFilter[2] = this.state.subjectFilterOption;
        searchFilter[3] = this.state.skillFilterOption;
        searchFilter[4] = this.state.tagFilterOption;
        searchFilter[5] = this.state.locationFilterOption;
        this.props.filterUpdated(searchFilter);
    }
    render(){
        return(
            <Card>
                <CardHeader style={tabTitleStyle}>
                    <div style={{display:"inline-block",width:"60%"}}><b>Search Filter</b></div>
                    <div style={{display:"inline-block",width:"40%",textAlign:"right"}}><a style={{color:"rgb(11,141,211)"}}>clear</a></div>
                </CardHeader>
                <CardBody style={{padding:"1.6rem"}}>
                    <p style={{color:"#aaa"}}>Level : <b style={{color:"#666"}}>{this.state.filterLevelValue.min} - {this.state.filterLevelValue.max}</b></p>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        value={this.state.filterLevelValue}
                        onChange={filterLevelValue => {this.setState({ filterLevelValue });this.searchFilterUpdated();}}/>
                    <br/>
                    <FileTypeSelectField value={this.state.fileFilterOption} onValueChanged={fileFilterOption => {this.setState({ fileFilterOption });this.searchFilterUpdated();}}/>
                    <br/>
                    <SubjectSelectField value={this.state.subjectFilterOption} onValueChanged={subjectFilterOption => {this.setState({ subjectFilterOption });this.searchFilterUpdated();}}/>
                    <br/>
                    <SkillSelectField value={this.state.skillFilterOption} onValueChanged={skillFilterOption => {this.setState({ skillFilterOption });this.searchFilterUpdated();}}/>
                    <br/>
                    <TagSelectField value={this.state.tagFilterOption} onValueChanged={tagFilterOption => {this.setState({ tagFilterOption });this.searchFilterUpdated();}}/>
                    <br/>
                    <LocationSelectField value={this.state.locationFilterOption} onValueChanged={locationFilterOption => {this.setState({ locationFilterOption });this.searchFilterUpdated();}}/>
                    <br/>
                </CardBody>
            </Card>
        )
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({filterUpdated : filterOptionCompleted },dispatch);
}

export default connect(null,matchDispatchToProps)(SearchFilterContent);
