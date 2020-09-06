import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import faker from 'faker'; // faker api
import { themePostCard, postCardButton } from './postCardStyle';

//===================================================================================================

const PostCard = (props) => {
  // Receive props from Home Component
  const { title, body, id } = props.post;
  // Handle "Continue Reading" Button dynamically
  const history = useHistory();
  const handleClickPost = (postId) => {
    history.push(`/post-details/${postId}`);
  };

  // Button Style
  const classesButton = postCardButton();

  return (
    <ThemeProvider theme={createMuiTheme(themePostCard)}>
      <Card className={'MuiEngagementCard'}>
        <CardMedia
          className={'MuiCardMedia-root'}
          image={faker.image.image()}
        />
        <CardContent className={'MuiCardContent-root'}>
          <Typography
            className={'MuiTypography--heading'}
            variant={'h6'}
            gutterBottom
          >
            {/* Post title */}
            {title}
          </Typography>
          <Typography
            className={'MuiTypography--subheading'}
            variant={'caption'}
          >
            {/* Post Body */}
            {body}
          </Typography>
          <Divider className={'MuiDivider-root'} light />

          {/* this button click will dynamically change the route */}
          <Button
            onClick={() => handleClickPost(id)}
            className={classesButton.button}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default PostCard;

// ==========================================================================================================

// Previous build
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { useHistory } from 'react-router-dom';
// import faker from 'faker'; // faker api

// // Style for PostCard and button
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     margin: 'auto',
//     marginTop: '30px',
//   },
//   media: {
//     height: 145,
//   },
//   button: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: '35px',
//     width: '100%',
//     padding: '0 30px',
//   },
// });

// const PostCard = (props) => {
//   // Receive props from Home Component
//   const { title, body, id } = props.post;

//   // Handle "Continue Reading" Button dynamically
//   const history = useHistory();
//   const handleClickPost = (postId) => {
//     history.push(`/post/${postId}`);
//   };

//   // Style
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           // Dynamic image from faker api
//           image={faker.image.image()}
//           title='Contemplative Reptile'
//         />
//         <CardContent>
//           <Typography gutterBottom variant='h5' component='h2'>
//             {/* Post title */}
//             {title}
//           </Typography>
//           <Typography variant='body2' color='textSecondary' component='p'>
//             {/* Post Body */}
//             {body}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         {/* this button click will dynamically change the route */}
//         <Button onClick={() => handleClickPost(id)} className={classes.button}>
//           Continue Reading...
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PostCard;
