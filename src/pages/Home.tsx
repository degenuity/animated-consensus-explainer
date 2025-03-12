
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a3a5f', 
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>X1 Research</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/whitepaper" style={{ color: 'white', marginRight: '20px' }}>
          Whitepaper
        </Link>
        <Link to="/consensus" style={{ color: 'white' }}>
          Consensus
        </Link>
      </div>
    </div>
  );
};

export default Home;
