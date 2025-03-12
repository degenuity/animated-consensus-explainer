
import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <img 
          src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
          alt="X1 Logo" 
          style={{ height: '28px', marginBottom: '20px' }} 
        />
        <h1 style={{ color: '#60a5fa', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          X1 Research
        </h1>
        <p>Welcome to X1 Research</p>
      </div>
    </div>
  );
};

export default Home;
