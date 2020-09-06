import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core/';
import PostCard from '../PostCard/PostCard';
import homeStyles from './homeStyle'
//===================================================================================================

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Call Posts API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // style
  const classes = homeStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='flex-start'
      >
        {/* map all posts to PostCard Component */}
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <PostCard post={post}></PostCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
