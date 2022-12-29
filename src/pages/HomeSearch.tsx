import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './HomeSearch.module.css';

import {MagnifyingGlass} from 'phosphor-react';

export function HomeSearch() {  

    const navigate = useNavigate();

    const [devSearch, setDevSearch] = useState('');

    function changeDevSearch(event: ChangeEvent<HTMLInputElement>){
        setDevSearch(event.target.value);
    }

    function handleSearch(event: FormEvent){
        event.preventDefault();

        navigate(`/devprofile?q=${devSearch}`, {replace: true});
        setDevSearch("");
    }


    const isEmptyField = devSearch.length == 0;

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Search Devs</h1>
            <form className={styles.searchForm}>
                <input
                    onChange={changeDevSearch} 
                    className={styles.searchField}
                    type="text"
                    placeholder='Digite o usuário aqui...'
                />
                <button disabled={isEmptyField} onClick={handleSearch} type="submit" className={styles.searchButton}>
                    <MagnifyingGlass size={30} color="#eceff4" />
                    {" "}
                    Buscar
                </button>
            </form>
        </div>
    );
}