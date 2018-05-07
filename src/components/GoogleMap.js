import React from 'react'

export default class GoogleMap extends React.Component {
    componentDidMount() {
        // let college_geo = new window.google.maps.Map(document.getElementById('college_geo'), {
        //     center: {lat: 25.106341, lng: 55.414113},
        //     zoom: 15,
        //     mapTypeId: 'roadmap',
        // });
    }

    render() {
        return (
            <div id='college_geo' style={{width:"100%",height:"400px"}}>
              {this.college_geo}
            </div>
        );
    }
}
