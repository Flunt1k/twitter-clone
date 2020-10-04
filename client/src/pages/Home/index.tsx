import React from 'react'
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import { AddTweetForm } from '../../components/AddTweetForm'
import {useStylesHome} from './theme'
import {SearchTextField} from '../../components/SearchTextField'

const Index = (): React.ReactElement => {
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
              <AddTweetForm classes={classes}/>
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

export default Index
