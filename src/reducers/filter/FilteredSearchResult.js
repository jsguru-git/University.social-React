import SearchData  from './SearchResult'

var SMRT = require('string-similarity');

export default function (state=SearchData, action){
    if(action.type === "FILTER_OPTION_COMPLETED")
    {
        var tmpState = [];
        var tmpData = action.data;

        //1. check level
        for(var i = 0 ; i < tmpData.length ; i++){
            if(tmpData[i].type === 'people')
            {
                if(tmpData[i].content.level >= parseInt(action.filter[0].min,10) && tmpData[i].content.level <= parseInt(action.filter[0].max,10)){
                    tmpState.push(tmpData[i]);
                }
            }
            else tmpState.push(tmpData[i]);
        }

        //2. check file type
        tmpData = tmpState;
        var toRemoveIndexes = [];
        for(i = 0 ; i < tmpData.length ; i++){
            if(tmpData[i].type === 'file')
            {
                var flag = false;
                //check if there is no filter for file type
                if(action.filter[1].length === 0) break;
                //else
                for(var j = 0 ; j < action.filter[1].length ; j++){
                    if(SMRT.compareTwoStrings(action.filter[1][j].value,tmpData[i].subType) > 0.7)
                    {
                        flag = true;
                        break;
                    }
                    else continue;
                }
                if(flag === false)
                    toRemoveIndexes.push(i);
            }
        }

        //remove items
        for(i = toRemoveIndexes.length - 1 ; i >= 0 ; i--)
        {
            tmpData.splice(toRemoveIndexes[i],1);
        }

        //3.check subject
        toRemoveIndexes = [];
        for(i = 0 ; i < tmpData.length ; i++){
            flag = false;
            //check if there is no filter for file type
            if(action.filter[2].length === 0) break;

            var tmpKeywords = tmpData[i].content.keywords;
            //else
            for(j = 0 ; j < action.filter[2].length ; j++){
                var str1 = action.filter[2][j].value;
                if(SMRT.findBestMatch(str1,tmpKeywords).bestMatch.rating > 0.6){
                    flag = true;
                    break;
                }
                else continue;
            }
            if(flag === false)
                toRemoveIndexes.push(i);
        }
        for(i = toRemoveIndexes.length - 1 ; i >= 0 ; i--)
        {
            tmpData.splice(toRemoveIndexes[i],1);
        }

        //4.check skill
        toRemoveIndexes = [];
        for(i = 0 ; i < tmpData.length ; i++){
            flag = false;
            //check if there is no filter for file type
            if(action.filter[3].length === 0) break;

            tmpKeywords = tmpData[i].content.keywords;
            //else
            for(j = 0 ; j < action.filter[3].length ; j++){
                str1 = action.filter[3][j].value;
                if(SMRT.findBestMatch(str1,tmpKeywords).bestMatch.rating > 0.6){
                    flag = true;
                    break;
                }
                else continue;
            }
            if(flag === false)
                toRemoveIndexes.push(i);
        }
        for(i = toRemoveIndexes.length - 1 ; i >= 0 ; i--)
        {
            tmpData.splice(toRemoveIndexes[i],1);
        }

        //5.check tags
        toRemoveIndexes = [];
        for(i = 0 ; i < tmpData.length ; i++){
            flag = false;
            //check if there is no filter for file type
            if(action.filter[4].length === 0) break;

            tmpKeywords = tmpData[i].content.keywords;
            //else
            for(j = 0 ; j < action.filter[4].length ; j++){
                str1 = action.filter[4][j].value;
                if(SMRT.findBestMatch(str1,tmpKeywords).bestMatch.rating > 0.6){
                    flag = true;
                    break;
                }
                else continue;
            }
            if(flag === false)
                toRemoveIndexes.push(i);
        }
        for(i = toRemoveIndexes.length - 1 ; i >= 0 ; i--)
        {
            tmpData.splice(toRemoveIndexes[i],1);
        }

        //6.check location
        toRemoveIndexes = [];
        for(i = 0 ; i < tmpData.length ; i++){
            flag = false;
            //check if there is no filter for file type
            if(action.filter[5].length === 0) break;

            tmpKeywords = tmpData[i].content.keywords;
            //else
            for(j = 0 ; j < action.filter[5].length ; j++){
                str1 = action.filter[5][j].value;
                if(SMRT.findBestMatch(str1,tmpKeywords).bestMatch.rating > 0.6){
                    flag = true;
                    break;
                }
                else continue;
            }
            if(flag === false)
                toRemoveIndexes.push(i);
        }
        for(i = toRemoveIndexes.length - 1 ; i >= 0 ; i--)
        {
            tmpData.splice(toRemoveIndexes[i],1);
        }

        tmpState = tmpData;
        return tmpState;
    }
    else return state;
}