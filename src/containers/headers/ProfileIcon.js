import React from 'react';
import {connect} from 'react-redux';

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,} from 'reactstrap';

import '../../styles/global-styles'

var FontAwesome = require('react-fontawesome');

const dropdownIconStyle = {backgroundColor:"white",border:"0px",boxShadow:"0px 0px white",padding:"0em"};

class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            imgUrl: "profile.jpg",
            name: "adsf"
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
                    <img src={this.props.userInfo.imgUrl} alt={this.props.userInfo.name} title={this.props.userInfo.name} style={{width:"45px",borderRadius:"30px"}}/>
                </DropdownToggle>
                <DropdownMenu right style={{lineHeight:"200%"}}>
                    <DropdownItem><a href="/homepage" style={{color:"black"}}><FontAwesome className='super-crazy-colors' name='home'/>&nbsp;&nbsp;&nbsp;Home</a></DropdownItem>
                    <DropdownItem><a href="/homepage" style={{color:"black"}}><FontAwesome className='super-crazy-colors' name='user-circle-o'/>&nbsp;&nbsp;&nbsp;Profile</a></DropdownItem>
                    <DropdownItem><a href="/dashboard" style={{color:"black"}}><FontAwesome className='super-crazy-colors' name='tachometer'/>&nbsp;&nbsp;&nbsp;Dashboard</a></DropdownItem>
                    <DropdownItem><a href="/" style={{color:"black"}}><FontAwesome className='super-crazy-colors' name='sign-out'/>&nbsp;&nbsp;&nbsp;Log Out</a></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

function mapStateToProps(state)
{
    return{
        userInfo : state.userInfo
    }
}

export default connect(mapStateToProps)(ProfileIcon);