// Comments Component Style
import { makeStyles } from '@material-ui/core/styles';

const commentStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    fonts: {
      fontWeight: 'bold',
    },
    inline: {
      display: 'inline',
    },
  }));

  export default commentStyles;