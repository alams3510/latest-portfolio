import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  console.log(menuOpen);
  return (
    <div className={"menu " + (menuOpen === true ? "active" : "")}>
      <ul>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#work">Work</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
