import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/ru/7/7a/Coffeeshop_Company_logo.png" alt=""/>
    </header>
  );
}

export default Header;
