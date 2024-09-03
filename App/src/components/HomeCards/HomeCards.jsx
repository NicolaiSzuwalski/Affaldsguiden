import React from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'
import { useEffect, useState } from 'react'
import styles from './HomeCards.module.scss'
import Arrow from '../../assets/images/Arrow.Png'
import { NavLink } from 'react-router-dom'


export const HomeCards = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const splitTitle = (title) => {
        if (!title) return { firstWord: '', restOfTitle: '' };
        const words = title.split(' ');
        return {
            firstWord: words[0],
            restOfTitle: words.slice(1).join(' '),
        };
    };

    const getHomeData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('articles')
                .select('id, title, teaser, html_content, is_news, slug, image_url');
            if (error) {
                console.error(error);
            } else {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selectedNews = shuffled.slice(0, 2);
                setData(selectedNews);
                console.log(data);
            }
        }
    };

    useEffect(() => {
        getHomeData();
    }, [supabase]);

    return (
        <section className={styles.HomeCards}>
            {data.map((article) => {
                const { firstWord, restOfTitle } = splitTitle(article.title);

                return (
                    <div key={article.id} className={styles.Card}>
                        <h2 className={styles.Title}>
                            {firstWord}
                            {restOfTitle && (
                                <span className={styles.RestOfTitle}>
                                    &nbsp;-&nbsp;
                                    <br />
                                    {restOfTitle}
                                </span>
                            )}
                        </h2>
                        <p className={styles.Teaser}>{truncateText(article.teaser, 50)}</p>
                        <div className={styles.ReadMore}>
                            <NavLink to='/Articles'>
                                <img src={Arrow} alt="arrow" />
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
