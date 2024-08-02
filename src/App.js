import './App.css';
import React from 'react';
import Button from '@mui/material/Button';


function App() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      <Button variant="contained" onClick={() => navigateTo('/One')}>
        one
      </Button>
      <Button variant="contained" onClick={() => navigateTo('/Two')}>
        Two
      </Button>
      <Button variant="contained" onClick={() => navigateTo('/Three')}>
        Three
      </Button>
    </div>
  );
}

export default App;