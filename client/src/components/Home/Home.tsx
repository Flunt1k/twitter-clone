import React from 'react';
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

import { grey } from '@material-ui/core/colors';
import { Tweet } from '../Tweet';
import { SideMenu } from '../SideMenu';

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
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
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
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(245, 248, 250)',
    },
    paddingTop: 15,
    paddingLeft: 20,
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
    width: 450,
  },
  tweetFooterIcon: {
    fontSize: 20,
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetUserName: {
    color: grey[500],
  },
}));

const SearchTextField = withStyles((theme) =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useStylesHome();
  return (
    <section>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideMenu classes={classes} />
          </Grid>
          <Grid item xs={6}>
            <Paper variant="outlined" className={classes.tweetsWrapper}>
              <Paper variant="outlined" className={classes.tweetsHeader}>
                <Typography variant="h6">Главная</Typography>
              </Paper>
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
                  />
                ),
              ].map((el) => el)}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <SearchTextField fullWidth placeholder="Поиск в Твиттере" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home;
