import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import faker from 'faker'; // faker api
import Comments from '../Comments/Comments';
import PostDetailsStyle from './postDetailsStyle';
import NoMatch from '../NoMatch/NoMatch';

//===================================================================================================

const PostDetails = () => {
  // Dynamic Route Hook
  const { postId } = useParams();
  const [post, setPost] = useState({});

  // Posts API Call with dynamic postId
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  // Style function from postDetailsStyle.js
  const classes = PostDetailsStyle();

  return (
    <>
      {/* if user manually entered a false id-> /post-details/falseId and is not available, we will get undefined id */}
      {post.id === undefined ? (
        <NoMatch />
      ) : (
        <div style={{ margin: '30px' }}>
          <Paper
            className={classes.clickedPost}
            // Dynamic image from faker api
            style={{ backgroundImage: `url(${faker.image.image()})` }}
          >
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src={faker.image.image()}
                alt=''
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.clickedPostContent}>
                  <Typography
                    component='h1'
                    variant='h3'
                    color='inherit'
                    gutterBottom
                  >
                    {/* Post Title */}
                    {post.title}
                  </Typography>
                  <Typography variant='h5' color='inherit' paragraph>
                    {/* Post Body */}
                    {post.body}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container justify='space-between' className={classes.spacing}>
            <Grid item>
              <Typography className={classes.header} variant='h4' gutterBottom>
                Comments
              </Typography>
            </Grid>
          </Grid>
          {/* Send post as props to Comments component */}
          <Comments postId={post.id}></Comments>
        </div>
      )}
    </>
  );
};

export default PostDetails;
