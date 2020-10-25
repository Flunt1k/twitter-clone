import axios from 'axios';
import {TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('https://trycode.pw/c/3NH9W.json').then(({data}) => data)
  }
}
