const SET_CSV = 'csv/setCsv';


const setCsv = (csv) => ({
    type: SET_CSV,
    payload: csv
});


export const thunkGetCsv = () => async (dispatch) => {
    const response = await fetch("/api/csv/");

    if(response.ok) {
        const data = await response.json();
        dispatch(setCsv(data));
    }
}

export default function csvReducer(state = {}, action) {
    switch (action.type) {
        case SET_CSV:
            return action.payload;
        default:
            return state;
    }
}
