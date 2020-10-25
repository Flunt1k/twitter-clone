import React from 'react';
import {Link} from 'react-router-dom';

import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { useStylesHome } from '../../pages/Home/theme';

interface TweetProps {
  classes: ReturnType<typeof useStylesHome>;
  _id: string
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id,
}: TweetProps): React.ReactElement => {
  return (
      <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
    <Paper
      variant="outlined"
      className={classNames(classes.tweet, classes.tweetsHeader)}
    >

        <Avatar
            className={classes.tweetAvatar}
            alt={`Аватар пользователя ${user.fullname}`}
            src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullname}</b>{' '}
            <span className={classes.tweetUserName}>@{user.username}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1">{text}</Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton color="primary">
                <CommentIcon className={classes.tweetFooterIcon} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepostIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <LikeIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <ShareIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
          </div>
        </div>
    </Paper>
      </Link>
  );
};
