import React from 'react';
import PeopleData from './PeopleData'
import {connect} from 'react-redux';

class DetailContent extends React.Component {
    getItemData()
    {
        var str1 = window.location.href.split('?');
        if(str1.length === 1) return null;
        var str2=str1[1].split('=');

        switch(str2[0])
        {
            case 'index':
                var index = parseInt(str2[1],10);
                for(var i = 0 ; i < this.props.fullSearchRes.length ; i++){
                    if(this.props.fullSearchRes[i].index === index)
                        return(this.props.fullSearchRes[i]);
                }
                break;
            default :
                return null;
        }
    }
    checkDataItem()
    {
        var item = this.getItemData();
        if(item === null) return 'There is no data';
        else{
            switch(item.type){
                case 'people' : return <PeopleData data={item.content}/>;
                case 'college' : return 'college';
            }
        }
    }
    render(){
        return(
            <div>
                {this.checkDataItem()}
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        fullSearchRes : state.filteredSearchRes
    }
}

export default connect(mapStateToProps)(DetailContent);