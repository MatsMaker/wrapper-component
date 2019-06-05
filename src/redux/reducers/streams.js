import { GET_STREAMS, CHANGE_GROUP } from '../actionsTypes';
import StreamData from './StreamData';

const initialState = {
  select: 'all-games',
  streamsList: [],
  userRole: 'admin',
  streamGroups: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STREAMS: {
      return {
        ...state,
        streamsList: action.payload,
      }
    }
    case CHANGE_GROUP: {
      return {
        ...state,
        select: action.payload.group,
      }
    }
    default:
      return state;
  }
}
