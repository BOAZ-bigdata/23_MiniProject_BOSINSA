# 23_MiniProject_BOSINSA
Personal Color 기반 상의 추천 이미지 생성 AI 👚👕

# AboutOurTeams..✨
BOSINSA

<img width="200px" src="https://github.com/0gonge.png"/> | <img width="200px" src="https://github.com/withmochaa.png"/> | <img width="200px" src="https://github.com/y-bin-s.png"/> | <img width="200px" src="https://github.com/Jaewon1634.png"/> | <img width="200px" src="https://github.com/kimmuyeon.png"/> | 
|:-----:|:-----:|:-----:|:-----:|:-----:|
|[송여경](https://github.com/0gonge)|[김강민](https://github.com/withmochaa)|[성예빈](https://github.com/y-bin-s)|[이재원](https://github.com/Jaewon1634)|[김무연](https://github.com/kimmuyeon)|

팀장: 송여경, 팀원: 김무연, 김강민, 이재원, 성예빈

# Backgrounds..
- 현재 2024의 트렌드는 퍼스널컬러에 대한 관심과 진단이 늘어나고 있는 추세이며, 자신의 개성을 표출하는 것에 많은 사람들이 관심을 가지고 있습니다. 

- 그러나 패션에 대해서 따로 공부하지 않은 사람들이나 자신의 개성을 표출하는데 어려움을 겪는 사람들은 이 정보를 어떻게 조합하고 활용할지 어려움을 겪고 있습니다. 

- 실제, 퍼스널 컬러진단을 받아도 진단 결과를 실제 의류 선택과 코디에 적용하기가 어렵고, 자신의 개성을 표현하고 싶은 욕구는 있지만, 스타일링 방법을 모르는 사람들이 많습니다. 

- 이를 생성형 AI를 통해 사용자의 퍼스널컬러 진단 결과에 따라 의류를 추천해주고, 조합을 추천해주어 스타일링을 도와줌으로써 소비자들의 개성 표현을 돕는 동시에, 패션 산업의 효율성을 높이는 win-win 솔루션이 될 것이라고 기대하며 프로젝트 방향성을 정하게 되었습니다.
---------

- In 2024, there is a growing trend in personal color analysis and an increasing interest in expressing individuality. However, people who are not well-versed in fashion or find it challenging to showcase their unique personality often struggle to combine and utilize this information effectively.

- In reality, even after receiving a personal color analysis, many people find it difficult to apply the results to selecting and coordinating clothing. While they have a desire to express their individuality, they lack knowledge about styling methods.

- By leveraging generative AI, this project aims to recommend clothing and styling combinations based on users' personal color analysis results, helping them express their individuality with ease. This approach not only supports consumers in expressing their unique style but also enhances the efficiency of the fashion industry, creating a win-win solution.

# MainFunctions..♻️
- **입력 이미지 전처리 기능**(이미지 로드 → 그레이스케일 변환 → 얼굴 탐지 → 얼굴 여역 추출→ 데이터 타입 확인 및 변환 → HSV 변환 → 피부 색상 마스크 생성 → 피부 색상 추출 → 이미지 크기 조적 → 이미지 유효성 검사 → 이미지 정규화)

- **VGG16+Transformer을 통한 퍼스널 컬러 선정 기능** : 이 VGG16 기반 모델은 사전 훈련된 특성과 깊은 네트워크 구조를 활용하여 얼굴 인식 작업에서 뛰어난 성능을 발휘할 수 있도록 설계했습니다.  특히, Multi-Head Attention과 Dropout 레이어의 추가해  모델의 학습 능력을 , 향상시키고 다양한 얼굴 인식 시나리오에 유연하게 대처할 수 있는 아키텍처로 구현하였습니다.
--------

- Input Image Preprocessing Features:
(Image loading → Grayscale conversion → Face detection → Face region extraction → Data type verification and conversion → HSV transformation → Skin color mask generation → Skin color extraction → Image resizing → Image validity check → Image normalization)

- Personal Color Selection Using VGG16 + Transformer:
This VGG16-based model leverages pre-trained features and a deep network structure to deliver exceptional performance in facial recognition tasks. In particular, the integration of Multi-Head Attention and Dropout layers enhances the model's learning capability and provides a flexible architecture to adapt to diverse face recognition scenarios.

# ExecutionVideo 🎥
![화면 기록 2024-12-09 16 06 16](https://github.com/user-attachments/assets/e12d584b-ef44-4812-9a3a-46dec553af7e)

# TechStack 🛠️
- AI : Python / OpenCV / Tensorflow /VGG16 / Transformer
- Web : React with fast api <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
- Crawling : Selenium, Chromedriver

# Future..👀
- 기존 모델은 4가지 퍼스널 컬러(봄, 여름, 가을, 겨울)의 데이터로 훈련됐으나 향후 퍼스널 컬러를 구체화하여 일반화 성능이 높은 모델 개발을 위한 모델링 예정.
- The existing model was trained on data for the four personal color categories (Spring, Summer, Autumn, Winter). However, future modeling will aim to further refine the personal color classifications to develop a model with higher generalization performance.
