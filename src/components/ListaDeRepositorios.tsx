import { Star } from 'phosphor-react';

import styles from './ListaDeRepositorios.module.css';


interface RepositoryProps {
    id: number;
    repositoryName: string;
    html_url: string;
    name: string;
    description: string;
    stargazers_count: string;
    devWanted: string;
}

interface Repository {
    repository: RepositoryProps[] | any;
}


export function ListaDeRepositorios({repository}: Repository){

    return (

        <div>
            {repository.sort((a: any, b:any) => b.stargazers_count - a.stargazers_count)
            .map((repository: RepositoryProps) => {
                return (
                    <div  key={repository.id} className={styles.repository} >
                        <h2 className={styles.repositoryName} ><a target="_blank" href={repository.html_url}>{repository.name}</a></h2>

                        <span className={styles.repositoryDescription}>
                            {repository.description}
                        </span>

                        <div className={styles.repositoryInfo}>
                            <span><Star size={20} color="#8190A5" /> {" "} {repository.stargazers_count} stars &#8226; Updated 30 days ago</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}