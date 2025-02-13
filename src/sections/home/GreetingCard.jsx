import React from 'react';
import { Box, Typography } from '@mui/material';

const GreetingCard = ({ title, description }) => {
  return (
    <Box
      sx={{
        p: 4,
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 2,
        maxWidth: '300px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default GreetingCard;
