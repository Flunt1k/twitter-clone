import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
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
        marginBottom: 45,
        marginTop: 20,
    },
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
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
