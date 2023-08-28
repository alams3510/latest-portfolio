import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              alams3510@gmail.com
            </a>
          </div>
          <div className="itemContainer">
            <AiFillLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/md-shahbaz-alam-68a618142"
              target="_blank"
            >
              Md Shahbaz Alam
            </a>
          </div>
          <div className="itemContainer">
            <AiFillGithub className="icon" />
            <a href="https://github.com/alams3510" target="_blank">
              GitHub
            </a>
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
