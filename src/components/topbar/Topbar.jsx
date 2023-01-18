import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aaaaa
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>4644353637</span>
          </div>
          <div className="itemContainer">
            <AiFillMail className="icon" />
            <span>shahbaz@example.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
