
import { fetchResultsPending, fetchResultsSuccess, fetchResultsError } from "../actions";

function fetchResults(text) {
    return dispatch => {
        dispatch(fetchResultsPending());
        fetch(`https://worldcup.sfg.io/matches/country?fifa_code=${text}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchResultsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchResultsError(error));
            })

    }
}

export default fetchResults;