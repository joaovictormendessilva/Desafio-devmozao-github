import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ListaDeRepositorios } from "../components/ListaDeRepositorios";

import styles from './DevProfile.module.css';

import { UsersThree, HeartStraight, Star, Buildings, MapPin, Link as Site, Envelope, TwitterLogo } from 'phosphor-react';

interface Dev {
    id: number;
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: string;
    following: string;
    company: string;
    location: string;
    email: string;
    site: string;
    site_admin: string;
    twitter_username: string;
    devWanted: string;
}



export function DevProfile(){

    const [dev, setDev] = useState<Dev>({} as Dev);
    const [repository, setRepository] = useState<string[]>([]);
    const [stars, setStars] = useState<string[]>([]);

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    useEffect(() => {
        axios.get(`https://api.github.com/users/${query}`)
        .then(({data}) => {
            setDev(data);
        })
        .catch(() => {
            console.log("Erro no consumo de API de Usuários");
        })
    }, [query])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${query}/starred`)
        .then(({data}) => {
            setStars(data);
        })
        .catch(() => {
            console.log("Erro no consumo da API de Estrelas");
        })
    })

    useEffect(() => {
        axios.get(`https://api.github.com/users/${query}/repos`)
        .then(({data}) => {
            setRepository(data);
        })
        .catch(() => {
            console.log("Erro no consumo da API de Repositórios")
        })
    }, [query]);

    var soma = stars.reduce((a, b:any) => a + b.stargazers_count, 0)
    
    return (
        <div className={styles.devProfile} key={dev.id}>
            <aside>

                <div className={styles.devAvatar}>
                    <img src={dev.avatar_url} alt="" />
                </div>

                <h2 className={styles.devName}>{dev.name}</h2>
                <i className={styles.userName}>@{dev.login}</i>

                <span className={styles.profileInformation}>
                    {dev.bio}
                </span>

                <div className={styles.socialInfo}>
                   <ul>
                    <li><UsersThree size={30} color="#eceff4" />{dev.followers} followers</li>
                    <li><HeartStraight size={30} color="#eceff4" />{dev.following} following</li>
                    <li><Star size={30} color="#eceff4" />{soma} stars</li>
                   </ul>
                </div>

                <div className={styles.devInfo}>
                    <ul>
                        <li><Buildings size={32} color="#eceff4" />{dev.company}</li>
                        <li><MapPin size={32} color="#eceff4" />{dev.location}</li>
                        <li><Envelope size={32} color="#eceff4" />{dev.email}</li>
                        <li><Site size={32} color="#eceff4" />{dev.site_admin}</li>
                        <li><TwitterLogo size={32} color="#eceff4" />{dev.twitter_username}</li>
                    </ul>
                </div>

                <footer className={styles.buttonBack}>
                <Link to="/"><button>Voltar</button></Link>
                </footer>
            </aside>

            <main>
                <ListaDeRepositorios repository={repository}/>
            </main>

           
        </div>
    );
}