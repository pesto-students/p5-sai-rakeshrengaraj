import { useState } from "react";
import styles from "./navBar.module.css";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar_header}>
        <h5>Shortly</h5>
        <a href="/#" className={styles.icon} onClick={onClickHandler}>
          <i className={clicked ? "fa fa-close" : "fa fa-bars"}></i>
        </a>
      </div>

      <div className={styles.navBar_navBtns}>
        <a href="/#">Features</a>
        <a href="/#">Pricing</a>
        <a href="/#">Resources</a>
      </div>
      <div className={styles.navBar_loginBtns}>
        <a href="/#">Login</a>
        <a href="/#">Sign Up</a>
      </div>

      <div className={styles.mobile_navBarbtns} id={clicked ? "active" : ""}>
        <a href="/#">Features</a>
        <a href="/#">Pricing</a>
        <a href="/#">Resources</a>
        <a href="/#">Login</a>
        <a href="/#">Sign Up</a>
      </div>
    </nav>
  );
}

export default NavBar;
