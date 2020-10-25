import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import {useStylesHome} from '../theme';

import {Tweet} from '../../../components/Tweet';
import {fetchTweet, setTweet} from '../../../store/ducks/tweet/actionCreators';
import {
  selectIsTweetLoading,
  selectTweetData,
} from '../../../store/ducks/tweet/selectors';

const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useStylesHome();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id: string } = useParams();
  const id = params.id;

  const handleFetchTweet = React.useCallback(
      () => dispatch(fetchTweet(id)),
      [dispatch, id]);

  React.useEffect(() => {
    handleFetchTweet();
    return () => {
      dispatch(setTweet(undefined))
    }
  }, [handleFetchTweet, dispatch]);

  if (isLoading) {
    return <div className={classes.tweetsCentered}>
      <CircularProgress/>
    </div>
  }

  if (tweetData) return <Tweet classes={classes} {...tweetData}/>


  return null
};

export default FullTweet;
