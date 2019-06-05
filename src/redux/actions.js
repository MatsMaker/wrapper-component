import { GET_STREAMS, CHANGE_GROUP } from './actionsTypes';

export const getStreams = () => ({
  type: GET_STREAMS
});

export const changeSelect = (e) => ({
  type: CHANGE_GROUP,
  payload: {
    group: e.target.value
  }
})