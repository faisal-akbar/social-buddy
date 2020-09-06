import React from 'react';
import Box from '@material-ui/core/Box';
//===================================================================================================

const NoMatch = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      m={1}
      p={1}
      bgcolor='background.paper'
    >
      <h3>Page not found !</h3>
    </Box>
  );
};

export default NoMatch;
