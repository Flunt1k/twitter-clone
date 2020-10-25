import React from 'react'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookMarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import { Button, IconButton, Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'
import CreateIcon from '@material-ui/icons/CreateOutlined'

import Modal from '../Modal'
import { useStylesHome } from '../../pages/Home/theme'
import { AddTweetForm } from '../AddTweetForm'
import {FetchTweetsActionInterface} from '../../store/ducks/tweets/actionCreators'

interface SideMenuProps {
  classes: ReturnType<typeof useStylesHome>;
  fetchTweets: () => FetchTweetsActionInterface
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes, fetchTweets }: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false)

  const handleClickAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton aria-label="" color="primary"
                    onClick={fetchTweets}
                    className={classes.logo}>
          <TwitterIcon className={classes.logoIcon}/>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookMarkIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickAddTweet}
          fullWidth
          color="primary"
          variant="contained"
          className={classes.sideMenuTweetButton}
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp><CreateIcon/></Hidden>
        </Button>
        <Modal visible={visibleAddTweet} onClose={handleCloseAddTweet} >
          <div style={{width: 550}}>
            <AddTweetForm maxRows={15} classes={classes}/>
          </div>
        </Modal>
      </li>
    </ul>
  )
}
