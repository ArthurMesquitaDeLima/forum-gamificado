import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import styles from './Search.module.css';

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log("Pesquisando por:", searchTerm);
    };

    return (
        <div className={styles.searchContainer}>
            <button className={styles.searchButton} onClick={handleSearch}>
                <IoSearchOutline />
            </button>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleSearchInputChange}
            />
        </div>
    );
};

export default Search;
