import React from 'react'
import styles from './Articles.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'
import readMore from '../../assets/images/readMore.png'
import { format } from 'date-fns';

export const Articles = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd. MMMM yyyy');
    };

    const getArticleData = async () => {
        if(supabase){
            const { data, error } = await supabase
                .from('articles')
                .select('id, published_at, title, teaser, html_content, is_news, slug, image_url')
            if(error){
                console.error(error);
            }else{
                setData(data)
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getArticleData();
    },[supabase]);


  return (
    <section className={styles.ArticlesMain}>
        <h1>Artikler</h1>
        <div className={styles.ArticleCards}>
            {data.map((item) =>{
                return(
                <div key={item.id} className={styles.Card}>

                    <div className={styles.cardImg}>
                        <img src={item.image_url} alt="ArticleImage" />
                    </div>

                    <div className={styles.Text}>
                    <div>
                    <h4>{item.title}</h4>
                    <b>{formatDate(item.published_at)}</b>
                    </div>
                    <p>{item.teaser}</p>
                    <Link to='/:section_id'><img src={readMore} alt="readMore" /></Link>
                    </div>
                </div>
                );
            })}
        </div>
    </section>
  )
}
