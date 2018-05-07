import React from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,} from 'reactstrap';

import HeaderMessageList from './HeaderMessageList';

const dropdownIconStyle = {backgroundColor:"white",border:"0px",boxShadow:"0px 0px white",padding:"0em"};
const iconFontStyle15 = {fontSize:"150%",color:"rgb(11,141,211)"};

var FontAwesome = require('react-fontawesome');

export default class MessageIcon extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle style={dropdownIconStyle}>
                    <FontAwesome className='super-crazy-colors' name='envelope-o' title="Messages" style={iconFontStyle15}/>
                </DropdownToggle>
                <DropdownMenu right style={{minWidth:"300px",maxWidth:"300px",maxHeight:"310px"}}>
                    <HeaderMessageList/>
                    <DropdownItem divider />
                    <DropdownItem href="" style={{textAlign:"right"}}>See all notifications</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}