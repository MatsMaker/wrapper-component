import axios from 'axios';
import { GET_STREAMS, CHANGE_GROUP } from './actionsTypes';
import StreamData from './reducers/StreamData';

export const getStreams = () => {
  return dispatch => {
    axios.get(`https://predictoria.com/api/stream/`)
      .then(res => {
        dispatch({
          type: GET_STREAMS,
          payload: res,
        });
      })
      .catch(error => {
        dispatch({ // Of course it is only for some show =) because server not support CURS
          type: GET_STREAMS,
          payload: StreamData,
        });
      });
  }
}

export const changeSelect = (e) => ({
  type: CHANGE_GROUP,
  payload: {
    group: e.target.value
  }
})