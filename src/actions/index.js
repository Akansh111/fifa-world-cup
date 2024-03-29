export const FETCH_RESULTS_PENDING = 'FETCH_RESULTS_PENDING';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR';

export function fetchResultsPending() {
    return {
        type: FETCH_RESULTS_PENDING
    }
}

export function fetchResultsSuccess(results) {
    return {
        type: FETCH_RESULTS_SUCCESS,
        results: results
    }
}

export function fetchResultsError(error) {
    return {
        type: FETCH_RESULTS_ERROR,
        error: error
    }
}