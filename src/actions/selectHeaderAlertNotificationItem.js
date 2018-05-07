export const selectHeaderAlertNotificationItem = (message) => {
    alert('You clicked request from '+message.name);
    return{
        type : "HEADER_MESSAGE_SELECTED",
        payload : message
    }
}
