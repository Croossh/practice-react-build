import "./HomePage.css";

import MainNav from "../../components/MainPage/MainNav/MainNav";
import HeaderScripts from "../../components/MainPage/HeaderScripts/HeaderScripts";
import ScrollBanner from "../../components/MainPage/ScrollBanner/ScrollBanner";
import MiddleScripts from "../../components/MainPage/MiddleScripts/MiddleScripts";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="NavContainer">
          <div className="inner">
            <MainNav />
            <HeaderScripts />
          </div>
        </div>
        <ScrollBanner />
        <MiddleScripts />
      </div>
    </div>
  );
};

export default HomePage;
