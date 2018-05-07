export const SelectPeopleListItem = (message) => {
    console.log('do you want details for man ',message);
    window.location.href = `/details?index=`+message.index;
    return{
        type : "PEOPLE_ITEM_SELECTED",
        payload : message
    }
}
