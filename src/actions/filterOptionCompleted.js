import SearchData  from '../reducers/filter/SearchResult';

export const filterOptionCompleted = (message) => {
    return{
        type : "FILTER_OPTION_COMPLETED",
        filter : message,
        data : SearchData
    }
}
