import "./MiddleScripts.css";

const MiddleScripts = () => {
  return (
    <div className="MiddleScripts">
      <div className="inner">
        <div className="EasySection">
          <h2>이젠 쉬워요</h2>
          <ul>
            <li>
              <h2>01</h2>
              <img
                className="SurveyImg"
                src={process.env.PUBLIC_URL + "/images/mainSurvey.png"}
                alt=""
              />
              <h1>건강설문</h1>
              <span>딱 3분! 간단하게 체크하고</span>
              <span>내 몸에 맞는 영양성분 찾기</span>
            </li>
            <li>
              <h2>02</h2>
              <img
                className="DeliveryImg"
                src={process.env.PUBLIC_URL + "/images/mainDelivery.png"}
                alt=""
              />
              <h1>정기구독</h1>
              <span>30일분 필리 영양제를</span>
              <span>평생 무료로 배송받기</span>
            </li>
            <li>
              <h2>03</h2>
              <img
                className="ClockImg"
                src={process.env.PUBLIC_URL + "/images/main24Clock.png"}
                alt=""
              />
              <h1>섭취관리</h1>
              <span>필리케어로 관리하고</span>
              <span>매일매일 섭취 습관 만들기</span>
            </li>
          </ul>
        </div>
        <div className="PictureSection">
          <h1>'필리'는 어떤게 좋은가요?</h1>
          <div className="FirstPicture">
            <img
              className="TwoHands"
              src={process.env.PUBLIC_URL + "/images/TwoHands.jpg"}
              alt=""
            />
            <h2>
              국내 연구진의 전문적인 연구결과를 기반으로 한국인의 생활 습관을
              고려한 건강설문 시스템을 만들었어요. 우리 몸에 꼭 맞는 영양성분을
              추천해요.
            </h2>
          </div>

          <div className="SecondPicture">
            <img
              className="GMP1"
              src={process.env.PUBLIC_URL + "/images/GMP.jpg"}
              alt=""
            />
            <h2>
              필리 영양제는 우수한 품질의 원료를 직접 선택하여, 엄격한 기준의
              품질관리를 통해 만들었어요. 믿고 섭취할 수 있는 영양제를
              만나보세요.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleScripts;
