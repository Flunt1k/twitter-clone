import React from 'react'
import {
  Avatar, Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from '@material-ui/core'
import classNames from 'classnames'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined'

import { useStylesHome } from '../../pages/Home/Home'

interface AddTweetFormProps {
  classes: ReturnType<typeof useStylesHome>
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
  return (
      <div className={classes.addForm}>
        <div className={classes.addFormBody}>
          <Avatar
            className={classes.tweetAvatar}
            alt={'Аватар пользователя UserAvatar'}
            src={'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1758&q=80'}
          />
          <TextareaAutosize
            className={classes.addFormTextarea}
            placeholder="Что происходит?"
          />
        </div>
        <div className={classes.addFormBottom}>
          <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
            <IconButton color="primary">
              <ImageOutlinedIcon style={{ fontSize: 26 }}/>
            </IconButton>
            <IconButton color="primary">
              <EmojiIcon style={{fontSize: 26}}/>
            </IconButton>
          </div>
          <div className={classes.addFormBottomRight}>
            <span>280</span>
            <div className={classes.addFormCircleProgress}>
              <CircularProgress variant="static"
                                size={20}
                                thickness={5}
                                value={40 >= 280
                                  ? 100
                                  : 280-40}
                                style={40 >= 280
                                  ? { color: 'red' }
                                  : undefined}
              />
              <CircularProgress
                style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                variant="static"
                size={20}
                thickness={5}
                value={100}
              />
            </div>
            <Button color="primary" variant="contained">
              Твитнуть
            </Button>
          </div>

        </div>
      </div>
  )
}
