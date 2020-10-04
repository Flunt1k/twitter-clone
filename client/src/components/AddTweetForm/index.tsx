import React from 'react'
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from '@material-ui/core'
import classNames from 'classnames'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined'

import { useStylesHome } from '../../pages/Home/theme'

interface AddTweetFormProps {
  classes: ReturnType<typeof useStylesHome>
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes }: AddTweetFormProps): React.ReactElement => {

  const [text, setText] = React.useState<string>('')
  const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100)
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    setText('')
  }

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
          onChange={handleChangeTextarea}
          value={text}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter,
          classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }}/>
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }}/>
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {
            text && (
              <>
                <span>{textCount}</span>
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH
                                      ? 100
                                      : textLimitPercent}
                                    style={text.length >= MAX_LENGTH
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
              </>)
          }
          <Button color="primary" variant="contained"
                  disabled={text.length > MAX_LENGTH}
                  onClick={handleClickAddTweet}
          >
            Твитнуть
          </Button>
        </div>

      </div>
    </div>
  )
}
