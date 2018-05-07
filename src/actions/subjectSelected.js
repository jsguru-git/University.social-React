import {reactLocalStorage} from 'reactjs-localstorage';

export const subjectSelected = (message) => {
    console.log('subject selected ', message);
    reactLocalStorage.setObject('u.s-subject', message);
    window.location.href="/subject";
    return{
        type : "SUBJECT_SELECTED",
        payload : message
    }
}