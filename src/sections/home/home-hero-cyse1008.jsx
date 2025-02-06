import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { m } from 'framer-motion'; // import `m` from framer-motion
import GreetingCard from './GreetingCard'; // Import the custom component

// Define your textGradient function if you don't have it already
const textGradient = (gradient) => ({
  backgroundImage: `linear-gradient(${gradient})`,
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
});

export function HomeHeroCYSE1008() {
  const theme = useTheme(); // Get the theme object
  const [count, setCount] = useState(0); // Initialize count to 0

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box component="span" sx={{ width: 1, opacity: 100 }}>
        Hello World! Webpage by Kamaldeep Bhati.
      </Box>
      
      <Box
        component={m.span} // Use `m.span` from framer-motion for animation
        animate={{ backgroundPosition: '200% center' }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          ...textGradient(
            `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
          ),
          backgroundSize: '400%',
          mt: 2, // Add margin to the top
        }}
      >
        Quilt
      </Box>

      <Box mt={4}>
        {/* Display the custom GreetingCard component */}
        <GreetingCard 
          title="Welcome to My Page" 
          description="This is a custom greeting card. Enjoy your stay!" 
        />
      </Box>

      <Box mt={4}>
        {/* Clickable Button with State */}
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          Toatl Click Count:  {count}
        </Button>
      </Box>

      <Box mt={4}>
        {/* Link Button */}
        <a href="http://localhost:3032/components/" target="_blank" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Go to Components
          </Button>
        </a>
      </Box>
    </Box>
  );
}
