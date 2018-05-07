import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Button} from 'reactstrap'

export default class test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Button
          onClick={this.handleToggle}
        >asdf</Button>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <div>
            asdfasdf
        </div>
        </Drawer>
      </div>
    );
  }
}