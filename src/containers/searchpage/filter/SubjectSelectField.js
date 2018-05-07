import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import 'react-select/dist/react-select.css';

class SubjectSelectField extends React.Component{
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
    			removeSelected: true,
    			disabled: false,
    			stayOpen: false,
    			rtl: false,
    		};
    }
  	handleSelectChange (event) {
        this.props.onValueChanged(event);
  	}
  	render () {
    		const options = this.props.options;
    		return (
      			<div className="section">
					<Select
						closeOnSelect={true}
						disabled={false}
						multi
						onChange={this.handleSelectChange}
						options={options}
						placeholder="e.g Business Management"
						removeSelected={this.state.removeSelected}
						rtl={this.state.rtl}
						value={this.props.value}
						isTextWrap={true}
					/>
				</div>
    		);
  	}
}
function mapStateToProps(state)
{
    return{
        options : state.subjectList
    }
}
export default connect(mapStateToProps)(SubjectSelectField);
