import "./MainNav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="Header">
      <div>
        <nav className="MainNav">
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="알트는 필수사항"
            />
          </Link>
          <div className="MainNavList">
            <span>
              <Link to={"/"}>제품보기</Link>
            </span>
            <span>
              <Link to={"/"}>고객후기</Link>
            </span>
            <span>
              <Link to={"/"}>장바구니</Link>
            </span>
            <span>
              <Link to={"/"}>고객센터</Link>
            </span>
            <span>
              <Link to={"/"}>기업복지</Link>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
