import React from 'react'
import classNames from 'classnames'
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'

export const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          color: theme.palette.primary.main,
        },
      },
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweet: {
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
  },
  tweetsCentred: {
    marginTop: 50,
    textAlign: 'center',
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -14,
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetFooterIcon: {
    fontSize: 20,
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetUserName: {
    color: grey[500],
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const SearchTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'transparent' },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField)

const Home = (): React.ReactElement => {
  const classes = useStylesHome()
  return (
    <section>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item sm={1} md={3}>
            <SideMenu classes={classes}/>
          </Grid>
          <Grid item sm={8} md={6}>
            <Paper variant="outlined" className={classes.tweetsWrapper}>
              <Paper variant="outlined" className={classes.tweetsHeader}>
                <Typography variant="h6">Главная</Typography>
              </Paper>
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
              <div className={classes.addFormBottomLine}/>
              {[
                ...new Array(20).fill(
                  <Tweet
                    text="@v1lat впервые за долгое время наткнулся на хорошего уровня
            русскоязычный комментарий НБА. Какого же было мое удивление, когда я
            понял, что это Вилат. Теперь с кайфом слушаю не только Доту в его
            исполнении и очень жду в Москве на совместный эфир велоспорта ;) так
            держать!"
                    classes={classes}
                    user={{
                      fullname: 'Flunt1k',
                      username: 'flunt1k',
                      avatarUrl:
                        'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1758&q=80',
                    }}
                  />,
                ),
              ].map((el) => el)}
            </Paper>
          </Grid>
          <Grid item sm={3} md={3}>
            <div className={classes.rightSide}>
              <SearchTextField
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader}
                       variant="outlined">
                  <b>Актуальные темы</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="Санкт-Петербург"
                      secondary={
                        <Typography component="span" variant="body2"
                                    color="textSecondary">
                          Твитов: 3 331
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li"/>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="#коронавирус"
                      secondary={
                        <Typography component="span" variant="body2"
                                    color="textSecondary">
                          Твитов: 163 122
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li"/>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="Беларусь"
                      secondary={
                        <Typography component="span" variant="body2"
                                    color="textSecondary">
                          Твитов: 13 554
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li"/>
                </List>
              </Paper>
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader}
                       variant="outlined">
                  <b>Кого читать</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dock Of Shame"
                      secondary={
                        <Typography component="span" variant="body2"
                                    color="textSecondary">
                          @FavDockOfShame
                        </Typography>
                      }
                    />
                    <Button color="primary">
                      <PersonAddIcon/>
                    </Button>
                  </ListItem>
                  <Divider component="li"/>
                </List>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Home
