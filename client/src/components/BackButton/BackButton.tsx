import React from 'react';
import {useHistory} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const handleClickBackButton = () => history.goBack()

  return (
      <div>
        <IconButton color="primary"
                    style={{marginRight: 20}}
                    onClick={handleClickBackButton}
        >
          <ArrowBackIcon/>
        </IconButton>
      </div>
  );
};

export default BackButton;
