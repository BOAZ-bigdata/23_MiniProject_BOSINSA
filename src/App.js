import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';
import ResultScreen from './scene/ResultScreen';
import RecommendationScreen from './scene/RecommendationScreen';
import LoadingScreen from './scene/LoadingScreen';

const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [personalColor, setPersonalColor] = useState('');

  const maleRecommendations = [
    {
      name: '진청데님 노카라 웨스턴 셔츠',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20220223/2381778/2381778_2_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/2381778',
    },
    {
      name: '린넨 데님 오픈카라 셔츠_진청',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20210524/1964348/1964348_1_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/1964348',
    },
    {
      name: 'Dipper logo hoodie / Deep red',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20231004/3602740/3602740_16964123063619_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3602740',
    },
    {
      name: '헤비 스트라이프 긴팔 티셔츠 (크림 와인)',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20220810/2710616/2710616_1_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/2710616',
    },
    {
      name: 'ARCH LOGO SWEATSHIRTS (DARK BLUE)',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20241121/4628824/4628824_17321564133464_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/4628824',
    },
    {
      name: '크림 바케트 트리플 스티치 네이비 크루넥 니트',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20230220/3092986/3092986_16773881099151_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3092986',
    },
  ];

  const femaleRecommendations = [
    {
      name: '솔리드 옥스포드 오버셔츠(화이트)',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20200305/1336290/1336290_3_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/1336290',
    },
    {
      name: '무브먼트 플라워 미드나잇블루 티셔츠 화이트',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20220704/2645649/2645649_1_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/2645649',
    },
     {
      name: '화란 세미오버 니트 애쉬 블루',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20200120/1275836/1275836_17255217051319_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/1275836',
    },
     {
      name: '[쿨탠다드] 우먼즈 피케 폴로 셔츠 [스카이 블루]',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20240125/3822224/3822224_17122838727056_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3822224',
    },
     {
      name: '87-STAN071 소프트 빈티지 오버핏 반팔 체크 셔츠 그레이',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20240702/4227396/4227396_17240555210421_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/4227396',
    },
     {
      name: 'KITSCH CAT KISS 오버핏 반팔티셔츠(SKBKNK-009)',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20240304/3918836/3918836_17095226829470_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3918836',
    },
     {
      name: 'UNISEX 오버핏 싱글 MAISON프린팅 슬리브리스 탑 멜란그레이(FCB2TS300M)',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20230131/3050498/3050498_16788417818201_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3050498',
    }
  ];

  const getRecommendations = () => {
    return gender === 'male' ? maleRecommendations : femaleRecommendations;
  };

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = (inputName, inputGender, uploadedImage, fileName) => {
    setName(inputName);
    setGender(inputGender);
    setUploadedImage(uploadedImage);
    setFileName(fileName);
    setStep(2);
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setPersonalColor('winter');
        setStep(3);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleShowMore = () => setStep(4);

  const handleRestart = () => {
    setName('');
    setGender('');
    setUploadedImage(null);
    setFileName('');
    setPersonalColor('');
    setStep(1);
  };

  return (
    <>
      {step === 0 && <LoadingScreen />}
      {step === 1 && <Step1Screen onNext={handleNext} />}
      {step === 2 && (
        <DiagnosisLoadingScreen
          name={name}
          uploadedImage={uploadedImage}
          fileName={fileName}
        />
      )}
      {step === 3 && (
        <ResultScreen
          name={name}
          personalColor={personalColor}
          onShowMore={handleShowMore}
        />
      )}
      {step === 4 && (
        <RecommendationScreen
          recommendations={getRecommendations()}
          personalColor={personalColor}
          name={name}
          uploadedImage={uploadedImage}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default App;
