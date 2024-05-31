import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';

export function Drawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className={styles.drawerContainer}>
            <button className={styles.drawerButton} onClick={openDrawer}>
                <FaBars />
            </button>
            <>
                <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
                    <button className={styles.closeDrawerButton} onClick={closeDrawer}>
                        Fechar <FaTimes />
                    </button>
                    <nav className={styles.navDraw}>
                        <Link to='/categories' className={styles.navItemDraw} onClick={closeDrawer}>
                            Categorias
                        </Link>
                        <Link to='/trends' className={styles.navItemDraw} onClick={closeDrawer}>
                            Tendência
                        </Link>
                        <Link to='/create-post' className={styles.navItemDraw} onClick={closeDrawer}>
                            Criar Post
                        </Link>
                        <Link to='/rank' className={styles.navItemDraw} onClick={closeDrawer}>
                            Rank
                        </Link>
                    </nav>
                </div>
                <div className={`${styles.overlay} ${isDrawerOpen ? styles.open : ''}`} onClick={closeDrawer}></div>
            </>
        </div>
    );
}
