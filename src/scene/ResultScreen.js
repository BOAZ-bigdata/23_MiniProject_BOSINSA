import React from 'react';

const ResultScreen = ({ name, personalColor, onShowMore }) => {
  const styles = {
    spring: {
      background: 'linear-gradient(to bottom, #E6D5B8, #A68F6C)',
      textColor: '#8B6F47',
    },
    summer: {
      background: 'linear-gradient(to bottom, #A4BED8, #5F8EA4)',
      textColor: '#4A7D92',
    },
    fall: {
      background: 'linear-gradient(to bottom, #704214, #4B2B0E)',
      textColor: '#3A1F0B',
    },
    winter: {
      background: 'linear-gradient(to bottom, #C0C0C0, #707070)',
      textColor: '#505050',
    },
  };

  const currentStyle = styles[personalColor.toLowerCase()] || {
    background: '#333',
    textColor: '#FFFFFF',
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    background: currentStyle.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    transition: 'background 0.5s ease',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #444',
    boxSizing: 'border-box',
  };

  const bosinsaStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    WebkitTextStroke: '1px white',
    color: 'white',
  };

  const coordinatorStyle = {
    fontSize: '16px',
    fontWeight: 'normal',
    background: 'linear-gradient(to right, #9734dd, #f9d5a2 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
  };

  const mainTextStyle = {
    fontSize: '45px',
    fontWeight: 'bold',
    marginBottom: '0',
  };

  const resultTextStyle = {
    color: currentStyle.textColor,
    fontWeight: 'bold',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, color 0.2s ease',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    color: '#007BFF',
  };

  return (
    <>
      {/* 헤더 */}
      <div style={headerStyle}>
        <div style={bosinsaStyle}>BOSINSA</div>
        <div style={coordinatorStyle}>당신만의 코디네이터</div>
      </div>

      {/* 본문 */}
      <div style={containerStyle}>
        <p style={mainTextStyle}>
          <span style={resultTextStyle}>{personalColor}</span> 이신{' '}
          <span style={{ color: '#4CAF50' }}>{name}</span>님에게
        </p>
        <p style={mainTextStyle}>딱 맞는 옷을 준비했어요!</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.transform = buttonHoverStyle.transform;
            e.target.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = 'white';
          }}
          onClick={onShowMore}
        >
          보러가기!
        </button>
      </div>
    </>
  );
};

export default ResultScreen;
