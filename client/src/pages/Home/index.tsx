import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStylesHome} from './theme';

import {Tweet} from '../../components/Tweet';
import {SideMenu} from '../../components/SideMenu';
import {AddTweetForm} from '../../components/AddTweetForm';
import {SearchTextField} from '../../components/SearchTextField';
import {fetchTweets} from '../../store/ducks/tweets/actionCreators';
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from '../../store/ducks/tweets/selectors';

const Home = (): React.ReactElement => {
  const classes = useStylesHome();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);


  const handleFetchTweets = React.useCallback(() => dispatch(fetchTweets()), [dispatch])

  React.useEffect(() => {
    handleFetchTweets()
  }, [handleFetchTweets]);
  return (
      <section>
        <Container maxWidth="lg" className={classes.wrapper}>
          <Grid container spacing={3}>
            <Grid item sm={1} md={3}>
              <SideMenu classes={classes} fetchTweets={handleFetchTweets}/>
            </Grid>
            <Grid item sm={8} md={6}>
              <Paper variant="outlined" className={classes.tweetsWrapper}>
                <Paper variant="outlined" className={classes.tweetsHeader}>
                  <Typography variant="h6">Главная</Typography>
                </Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes}/>
                </div>
                <div className={classes.addFormBottomLine}/>
                {
                  isLoading
                      ? <div className={classes.tweetsCentered}>
                        <CircularProgress/></div>
                      : tweets.map((tweet) =>
                          <Tweet key={tweet._id}
                                 text={tweet.text}
                                 classes={classes}
                                 user={tweet.user}/>,
                      )
                }
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
  );
};

export default Home;
