
import { FETCH_RESULTS_PENDING, FETCH_RESULTS_SUCCESS, FETCH_RESULTS_ERROR } from '../actions';

const initialState = {
  pending: false,
  results: [],
  error: null
}

export default function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS_PENDING:
      return {
        ...state,
        pending: true,
        results: [],
        error: 'noerror'
      }
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.results,
        error: null
      }
    case FETCH_RESULTS_ERROR:
      return {
        ...state,
        pending: false,
        results: [],
        error: action.error
      }
    default:
      return state;
  }
}

export const getResults = state => state.results;
export const getResultsPending = state => state.pending;
export const getResultsError = state => state.error;