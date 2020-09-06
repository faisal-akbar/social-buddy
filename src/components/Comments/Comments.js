import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';
import faker from 'faker'; // faker api
import commentStyles from './commentStyle';

//===================================================================================================

const Comments = (props) => {
  // console.log(props.post)
  const id = props.postId;
  const [comments, setComments] = useState([]);

  // Comments API Call
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  // style
  const classes = commentStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        // console.log('Comment', comment);
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems='flex-start'>
              <ListItemAvatar>
                {/* Dynamic avatar image from faker api */}
                <Avatar alt='avatar' src={faker.image.avatar()} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {/* Person name who commented */}
                    {comment.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component='span'
                      variant='body2'
                      className={classes.inline}
                      color='textPrimary'
                    >
                      {/* Email address of each commented person */}
                      {comment.email}
                    </Typography>
                    {/* Comment details */}
                    {` - ${comment.body}`}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Comments;
