// Card theme Style
import {createMuiTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';

const muiBaseTheme = createMuiTheme();
const themePostCard = {
  overrides: {
    MuiCard: {
      root: {
        '&.MuiEngagementCard': {
          transition: '0.3s',
          maxWidth: 400,
          margin: 'auto',
          marginTop: '20px',
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
          '& .MuiCardMedia-root': {
            paddingTop: '56.25%',
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: muiBaseTheme.spacing(3),
          },
          '& .MuiDivider-root': {
            margin: `${muiBaseTheme.spacing(3)}px 0`,
          },
          '& .MuiTypography--heading': {
            fontWeight: 'bold',
            lineHeight: '1.5em',
            height: '3em',
            overflow: 'hidden',
          },
          '& .MuiTypography--subheading': {
            display: 'block',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            overflow: 'hidden',
            maxHeight: '3.6em',
            lineHeight: '1.8em',
          },
          '& .MuiAvatar-root': {
            display: 'inline-block',
            border: '2px solid white',
            '&:not(:first-of-type)': {
              marginLeft: -muiBaseTheme.spacing,
            },
          },
        },
      },
    },
  },
};

// Style for card button
const postCardButton = makeStyles({
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: '35px',
      width: '100%',
      padding: '0 30px',
    },
  });

export {themePostCard, postCardButton};