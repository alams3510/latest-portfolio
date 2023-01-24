import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            S H A H B A Z
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+91-7908231334</span>
          </div>
          <div className="itemContainer">
            <AiFillMail className="icon" />
            <span >alams3510@gmail.com</span>
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
