export default function (state={}, action){
    if(action.type === "PEOPLE_ITEM_SELECTED")
    {
        return action.payload;
    }
    return [];
}