import React from 'react';
import {Link } from 'react-router-dom';
import styles from './Header.module.css';

import { Drawer } from '../DrawerComponent/Drawer';
import { Search } from '../SearchComponent/Search';
import { UserNavigation } from '../UserNavigationComponet/UserNavigation';

export function Header() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navContainerWidth}>
          <div className={styles.navItemsContainer}>
            <Drawer/>
            <Link to='/' className={styles.navItem}><img src='./../public/Logo.png' alt="Logo" /></Link>
            <Link to='/categories' className={styles.navItem}>Categorias</Link>
            <Link to='/trends' className={styles.navItem}>Tendecia</Link>
            <Link to='/create-post' className={styles.navItem}>Novo</Link>
            <Link to='/rank' className={styles.navItem}>Rank</Link>
            <Search />
          </div>
          <div className={styles.navItemsContainer}>
            <UserNavigation />
          </div>
        </div>
      </nav>
    </>
  );
};

