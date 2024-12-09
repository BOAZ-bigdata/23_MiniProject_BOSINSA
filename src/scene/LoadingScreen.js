import React from 'react';

const LoadingScreen = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '100px',
    fontWeight: 'bold',
    animation: 'fadeIn 3s ease-in-out',
  };

  const subtitleStyle = {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'normal',
    marginTop: '20px',
    animation: 'fadeIn 3s ease-in-out',
    animationDelay: '1s',
    opacity: 0,
    animationFillMode: 'forwards',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>BOSINSA</div>
      <div style={subtitleStyle}>
        BOSINSA will be your personal coordinator.
      </div>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
