import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
  const [value, setValue] = React.useState(2);
  let rate=props.rate;

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
        <Rating
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
      
    
    </Box>
  );
}