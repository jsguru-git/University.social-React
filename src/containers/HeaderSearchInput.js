import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    Form,
    InputGroup,
    Input
  } from 'reactstrap'

import {searchKeyCompleted} from '../actions/searchKeyCompleted'

class HeaderSearchInput extends Component{
    constructor(props) {
        super(props);
        this.onSearchKeyChange = this.onSearchKeyChange.bind(this);
        this.onSearchKeyComplete = this.onSearchKeyComplete.bind(this);
    }
    onSearchKeyChange(event) {
        this.setState({
            searchKey:event.target.value
        });
    }
    onSearchKeyComplete(event) {
        if(this.state.searchKey !== undefined && this.state.searchKey !== "")
        {
            window.location="search";
            event.preventDefault();
        }
    }
    render(){
        return(
            <Form onSubmit={this.onSearchKeyComplete}>
                <InputGroup>
                    <Input
                      type="text"
                      bsSize="sm"
                      placeholder="Search for files,projects,members,college,jobs,companies"
                      style={{borderRadius:"20px"}}
                      onChange={this.onSearchKeyChange} value={this.props.searchKey}/>
                </InputGroup>
            </Form>
        )
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({submit : searchKeyCompleted },dispatch);
}

export default connect(matchDispatchToProps)(HeaderSearchInput);
