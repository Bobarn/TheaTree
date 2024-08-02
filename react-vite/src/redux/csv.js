const SET_CSV = 'csv/setCsv';


const setCsv = (csv) => ({
    type: SET_CSV,
    payload: csv
});


export const thunkGetCsv = () => async (dispatch) => {
    const response = await fetch("/api/csv/");
    console.log(response)

    if(response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(setCsv(data));
    } else {
        console.log("Reached an error")
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
