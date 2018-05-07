import React from 'react';
import {
    Col,
    Row,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';

import '../../styles/global-styles'

var FontAwesome = require('react-fontawesome');

const iconFontStyle15 = {fontSize:"150%",color:"rgb(11,141,211)"};
const iconFontStyle20 = {fontSize:"200%",color:"rgb(11,141,211)"};
const dropdownIconStyle = {backgroundColor:"white",border:"0px",boxShadow:"0px 0px white",padding:"0em"};
const centerStyle = {textAlign:"center"};
const grayTextStyle = {color:"#888"};

export default class UploadIcon extends React.Component {
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
                    <FontAwesome className='super-crazy-colors' title="Upload" name='file-o' style={iconFontStyle15}/>
                </DropdownToggle>
                <DropdownMenu right style={{minWidth:"360px",padding:"2rem 1rem",color:"#ddd"}}>
                    <Row style={{paddingBottom:"2rem"}}>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='edit' style={iconFontStyle20}/><br/>File</a>
                        </Col>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='tv' style={iconFontStyle20}/><br/>Project</a>
                        </Col>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='calendar-o' style={iconFontStyle20}/><br/>Event</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='newspaper-o' style={iconFontStyle20}/><br/>News</a>
                        </Col>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='wpforms' style={iconFontStyle20}/><br/>Assignment</a>
                        </Col>
                        <Col style={centerStyle}>
                            <a href="" style={grayTextStyle}><FontAwesome className='super-crazy-colors' name='pencil' style={iconFontStyle20}/><br/>Report</a>
                        </Col>
                    </Row>
                </DropdownMenu>
            </Dropdown>
        );
    }
}