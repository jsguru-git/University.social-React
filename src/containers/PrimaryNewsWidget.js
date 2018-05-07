import React from 'react';
import {
    Card,
} from 'reactstrap';
import 'react-input-range/lib/css/index.css';
import '../styles/global-styles'

class PrimaryNewsWidget extends React.Component {
    render() {
        return(
            <Card style={{padding:"1rem"}}>
              Primary News
            </Card>
        )
    }
}
export default PrimaryNewsWidget;
