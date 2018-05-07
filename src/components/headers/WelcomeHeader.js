import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from 'reactstrap';

export default class WelcomeHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ borderBottom:"2px solid rgb(11,141,211)",padding:"0.1rem"}}>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-8" align="left" style={{paddingLeft:"6%",display:"flex",alignItems:"center"}}>
            <img src="logo.png" alt='University.Social' style={{width:"30px"}}/>
            <b>UNIVERSITY.SOCIAL</b>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-sm-offset-0 col-xs-6" isOpen={this.state.isOpen} navbar style={{textAlign:"center"}}>
            <Nav className="" navbar>
              <NavItem>
                <NavLink href="/why-choose-us" style={{paddingRight:"4em"}}><b>Why Choose Us?</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pricing" style={{paddingRight:"4em"}}><b>Pricing</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/help-center" style={{paddingRight:"4em"}}><b>Help Center</b></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6" align="right">
              <Button href="homepage" outline color="secondary" style={{width:"80%",border:"0px"}}><span style={{color:"rgb(11,141,211)",fontWeight:"900"}}>LogIn</span></Button>
          </div>
        </Navbar>
      </div>
    );
  }
}
