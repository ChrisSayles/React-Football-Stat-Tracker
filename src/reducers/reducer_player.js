import { FETCH_PLAYER } from '../actions/';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_PLAYER:
    // use lodash here to pull out the profileId and make it the key. Later we can search players by key
      // return _.mapKeys(action.payload.data, "profileId");    
      return action.payload.data
    default:
      return state;
  }
}