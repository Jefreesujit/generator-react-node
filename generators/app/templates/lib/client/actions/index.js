/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

import axios from 'axios';

export const FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
export const SET_PAGEDATA = 'SET_PAGEDATA';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export function fetchingPageData () {
  return {
    type: FETCHING_PAGEDATA
  };
}

export function setPageData (data) {
  return {
    type: SET_PAGEDATA,
    payload: data
  };
}

export function fetchPageData () {
  return function (dispatch) {
    dispatch(fetchingPageData());
    return axios.get('/api/get-page-details')
       .then(function (response) {
         dispatch(setPageData(response.data));
       });
  };
}
