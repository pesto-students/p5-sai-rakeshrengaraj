// import React from "react";
import styles from './navBar.module.css'


function navBarResponsive(){
    var x = document.getElementById("navBarTop");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
}


function NavBar() {
  return (
      <nav className={styles.navBar} id="navBarTop">
        <div className={styles.navBar_header}>Shortly</div>
        <div className={styles.navBar_navBtns}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className={styles.navBar_loginBtns}>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
        <a href="#" className={styles.icon} onClick={navBarResponsive}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>

  );
}

export default NavBar;
