import React from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';
import HeaderAlertList from './HeaderAlertList';

const dropdownIconStyle = {backgroundColor:"white",border:"0px",boxShadow:"0px 0px white",padding:"0em"};

var FontAwesome = require('react-fontawesome');

const iconFontStyle15 = {fontSize:"150%",color:"rgb(11,141,211)"};

export default class NotificationIcon extends React.Component {
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
                    <FontAwesome className='super-crazy-colors' title="Notifications" name='bell-o' style={iconFontStyle15}/>
                </DropdownToggle>
                <DropdownMenu right style={{minWidth:"300px",maxWidth:"300px",maxHeight:"310px"}}>
                    <HeaderAlertList/>
                    <DropdownItem divider />
                    <DropdownItem href="" style={{textAlign:"right"}}>See all notifications</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}