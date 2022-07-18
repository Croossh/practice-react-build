import "./HomePage.css";

import MainNav from "../../components/MainNav/MainNav";
import HeaderScripts from "../../components/HeaderScripts/HeaderScripts";

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
      </div>
    </div>
  );
};

export default HomePage;
