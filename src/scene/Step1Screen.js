import React, { useState } from 'react';

const Step1Screen = ({ onNext }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!name || !uploadedImage || !gender) {
      alert('이름, 성별, 사진을 모두 입력해주세요.');
      return;
    }
    onNext(name, gender, uploadedImage, fileName);
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to top, #222 20%, #555 80%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    gap: '10px',
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
    fontSize: '50px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const subTextStyle = {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#ccc',
    margin: '5px 0',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #fff',
    outline: 'none',
  };

  const buttonStyle = {
    marginTop: '10px',
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

  const imageStyle = {
    marginTop: '10px',
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '8px',
  };

  const genderSelectStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
  };

  const genderButtonStyle = (isSelected) => ({
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isSelected ? '#FFF' : '#4CAF50',
    backgroundColor: isSelected ? '#4CAF50' : '#FFF',
    border: `1px solid ${isSelected ? '#4CAF50' : '#FFF'}`,
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  });

  return (
    <>
      {/* 헤더 */}
      <div style={headerStyle}>
        <div style={bosinsaStyle}>BOSINSA</div>
        <div style={coordinatorStyle}>당신만의 코디네이터</div>
      </div>

      {/* 본문 */}
      <div style={containerStyle}>
        <h2 style={mainTextStyle}>당신의 퍼스널 컬러를 진단해드릴게요</h2>
        <p style={subTextStyle}>얼굴이 잘 나온 사진 한 장을 업로드 해주세요.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={genderSelectStyle}>
            <button
              style={genderButtonStyle(gender === 'male')}
              onClick={() => setGender('male')}
            >
              남성
            </button>
            <button
              style={genderButtonStyle(gender === 'female')}
              onClick={() => setGender('female')}
            >
              여성
            </button>
          </div>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input type="file" accept="image/*" onChange={handleFileChange} style={inputStyle} />
        </div>
        {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" style={imageStyle} />}
        <button
          onClick={handleSubmit}
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.transform = buttonHoverStyle.transform;
            e.target.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = 'white';
          }}
        >
          진단하기
        </button>
      </div>
    </>
  );
};

export default Step1Screen;
