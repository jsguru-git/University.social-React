export default function(state={},action)
{
    if(action.type === undefined) return [];
    switch(action.type){
        case "PEOPLE_ITEM_SELECTED" :
            return action.payload;
        default:
            return [];
    }
}