import "./Nav.scss";
import burgerIcon from "../../assets/dropdown icon 2.png";

const Nav = () => {
  return (
    <nav className="navigation">
      <a className="navigation__left" href="#">
        JA
      </a>
      <div className="navigation__right">
        <button className="navigation__dropbtn">
          <img
            src={burgerIcon}
            alt="dropdown icon"
            className="navigation__dropbtn--icon"
          ></img>
        </button>
        <div className="navigation__right--content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a
            href="mailto:jessicaadis7@gmail.com?subject=Hey we'd love to work with you!"
            rel="noopener noreferrer"
            className="navigation__right--cta"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
