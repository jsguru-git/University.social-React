export const selectHeaderMessageNotificationItem = (message) => {
    alert('You clicked message from '+message.name);
    return{
        type : "HEADER_MESSAGE_SELECTED",
        payload : message
    }
}
