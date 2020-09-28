import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon
    from '@material-ui/icons/ChatBubbleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideBackgroundIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '190%',
        height: '190%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    authSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    authSideTwitterIcon: {
        fontSize: 45,
    },
    authSideWrapper: {
        width: 380,
    },
    authSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBackgroundIcon}
                             color="primary"/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon
                                className={classes.blueSideListInfoIcon}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon
                                className={classes.blueSideListInfoIcon}/>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <ChatBubbleOutlineIcon
                                className={classes.blueSideListInfoIcon}/>
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.authSide}>
                <div className={classes.authSideWrapper}>
                    <TwitterIcon className={classes.authSideTwitterIcon}
                                 color="primary"/>
                    <Typography variant="h4" className={classes.authSideTitle}>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
                    </Typography>
                    <br/>
                    <Button variant="contained"
                            color="primary"
                            fullWidth
                            style={{marginBottom: 20}}>
                        Зарегистрироваться
                    </Button>
                    <Button variant="outlined"
                            color="primary"
                            fullWidth>
                        Войти
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
