export default function (state={}, action){
    if(action.type === "FILE_ITEM_SELECTED")
    {
        return action.payload;
    }
    return [];
}