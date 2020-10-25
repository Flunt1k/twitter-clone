import axios from 'axios';
import {Tweet, TweetsState} from '../../store/ducks/tweets/contracts/state';

export const TweetApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({data}) => data)
  },
  fetchTweet(id: string): Promise<Tweet[]> {
    return axios.get('/tweets?_id=' + id).then(({data}) => data)
  }
}
