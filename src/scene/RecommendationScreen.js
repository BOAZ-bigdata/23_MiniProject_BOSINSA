import React, { useState } from 'react';

const RecommendationScreen = ({ recommendations, personalColor, name, uploadedImage, onRestart }) => {
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0); // 인덱스로 관리

  const handleNextRecommendation = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * recommendations.length);
    } while (randomIndex === currentRecommendationIndex);
    setCurrentRecommendationIndex(randomIndex);
  };

  const currentRecommendation = recommendations[currentRecommendationIndex]; // 현재 추천 항목

  const styles = {
    spring: {
      background: 'linear-gradient(to bottom, #FFF8E7, #F0C987)',
      textColor: '#D2B48C',
    },
    summer: {
      background: 'linear-gradient(to bottom, #D6E6F2, #6A9FE9)',
      textColor: '#5F9EA0',
    },
    fall: {
      background: 'linear-gradient(to bottom, #5E2605, #CD853F)',
      textColor: '#5E2605',
    },
    winter: {
      background: 'linear-gradient(to bottom, #FFFFFF, #B0B0B0)',
      textColor: '#A9A9A9',
    },
  };

  const currentStyle = styles[personalColor.toLowerCase()] || {
    background: '#333',
    textColor: '#FFFFFF',
  };

  const containerStyle = {
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    background: currentStyle.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '30px',
    padding: '20px',
    color: currentStyle.textColor,
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
    fontSize: '18px',
    fontWeight: 'normal',
    background: 'linear-gradient(to right, #9734dd, #f9d5a2 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
  };

  const mainTextStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0 0',
  };

  const imagesContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  };

  const userImageStyle = {
    maxWidth: '200px',
    maxHeight: '200px',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const recommendationImageStyle = {
    maxWidth: '350px',
    maxHeight: '350px',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const hyperlinkStyle = {
    color: currentStyle.textColor,
    textDecoration: 'underline',
    fontSize: '18px',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, color 0.2s ease',
  };

  const restartButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FF4500',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    color: '#007BFF',
  };

  const highlightStyle = {
    color: currentStyle.textColor,
    fontWeight: 'bold',
  };

  const nameStyle = {
    color: '#000000',
    fontWeight: 'bold',
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
          <span style={highlightStyle}>{personalColor}</span> 이신{' '}
          <span style={nameStyle}>{name}</span>님에게 딱 맞는 옷은
        </p>
        <p style={mainTextStyle}>
          {' '}
          <span style={{ color: '#FFA500', fontWeight: 'bold' }}>
            {currentRecommendation.name}
          </span>{' '}
          입니다.
        </p>
        <div style={imagesContainerStyle}>
          {/* 사용자 업로드 이미지 */}
          <img
            src={uploadedImage}
            alt="사용자 업로드 이미지"
            style={userImageStyle}
          />
          {/* 추천된 옷 이미지 */}
          <img
            src={currentRecommendation.image}
            alt="추천된 옷"
            style={recommendationImageStyle}
          />
        </div>
        <a
          href={currentRecommendation.url}
          target="_blank"
          rel="noopener noreferrer"
          style={hyperlinkStyle}
        >
          상품 보러가기
        </a>
        <div style={{ display: 'flex', gap: '20px' }}>
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
            onClick={handleNextRecommendation}
          >
            다른 옷 보기!
          </button>
          <button
            style={restartButtonStyle}
            onMouseOver={(e) => {
              e.target.style.transform = buttonHoverStyle.transform;
              e.target.style.color = buttonHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = 'white';
            }}
            onClick={onRestart}
          >
            다시 할래요!
          </button>
        </div>
      </div>
    </>
  );
};

export default RecommendationScreen;
