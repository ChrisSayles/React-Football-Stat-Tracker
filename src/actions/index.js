import axios from 'axios';

export const FETCH_PLAYER = 'fetch_player';

const ROOT_URL = 'http://api.suredbits.com/nfl/v0/players/'

export function fetchPlayer(playerName) {
  const { firstName, lastName } = playerName;
  const request = axios({method: 'get', url: '/nflplayer', params: playerName, responseType: 'json'});
  return {
    type: FETCH_PLAYER,
    payload: request,
  };
}