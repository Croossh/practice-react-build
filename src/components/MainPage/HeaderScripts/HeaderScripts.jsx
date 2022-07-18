import "./HeaderScripts.css";
import { Link } from "react-router-dom";

const HeaderScripts = () => {
  return (
    <div className="HeaderContent">
      <div className="TopScripts">
        <h1>
          내 몸에 필요한
          <br />
          영양성분 궁금하세요?
        </h1>
        <p>
          나만을 위한 맞춤영양제를 찾아보세요!
          <br />
          이미 1명이 추천 받았습니다.
        </p>
      </div>
      <button className="TopButton">
        <Link to="">제품 보러가기</Link>
      </button>
    </div>
  );
};

export default HeaderScripts;
