import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {useStylesHome} from '../../pages/Home/theme';
import {Link} from 'react-router-dom';

interface TagProps {
  classes: ReturnType<typeof useStylesHome>
  name: string;
  counter: number
}

const Tag: React.FC<TagProps> = ({name, counter, classes}: TagProps): React.ReactElement => {
  return (
      <>
        <ListItem className={classes.rightSideBlockItem}>
          <Link to={`/home/search?q=${name}`}>
            <ListItemText
                primary={name}
                secondary={
                  <Typography component="span" variant="body2"
                              color="textSecondary">
                    Твиттов: {counter}
                  </Typography>
                }
            />
          </Link>
        </ListItem>
        <Divider component="li"/>
      </>
  );
};

export default Tag;
