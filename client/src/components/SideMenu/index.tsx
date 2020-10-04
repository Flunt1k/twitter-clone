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
import { useStylesHome } from '../../pages/Home/theme'

interface SideMenuProps {
  classes: ReturnType<typeof useStylesHome>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton aria-label="" color="primary"
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
          fullWidth
          color="primary"
          variant="contained"
          className={classes.sideMenuTweetButton}
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp><CreateIcon/></Hidden>
        </Button>
      </li>
    </ul>
  )
}
