import {reactLocalStorage} from 'reactjs-localstorage';

export const courseSelected = (message) => {
    console.log('course selected ', message);
    reactLocalStorage.setObject('u.s-course', message);
    window.location.href="/course";
    return{
        type : "COUSRE_SELECTED",
        payload : message
    }
}