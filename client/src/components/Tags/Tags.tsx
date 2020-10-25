import React from 'react';
import {useSelector} from 'react-redux';

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import {useStylesHome} from '../../pages/Home/theme';

import Tag from './Tag';
import {
  selectIsTagsLoaded,
  selectTagsItems,
} from '../../store/ducks/tags/selector';

interface TagsProps {
  classes: ReturnType<typeof useStylesHome>;
}

const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement | null => {
  const tags = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null
  }
  return (
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader}
               variant="outlined">
          <b>Актуальные темы</b>
        </Paper>
        <List>
          {tags.map(tag =>
              <Tag key={tag._id}
                   classes={classes}
                   name={tag.name}
                   counter={tag.counter}/>,
          )}
        </List>
      </Paper>
  );
};

export default Tags;
