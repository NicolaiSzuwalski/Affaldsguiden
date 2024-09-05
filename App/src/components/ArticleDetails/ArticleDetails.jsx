import React from 'react'
import styles from './ArticleDetails.module.scss'
import { useEffect, useState } from 'react' 
import { useSupabase } from '../../providers/SupabaseProvider'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns';



export const ArticleDetails = () => {

    const [data, setData] = useState([])
    const { article_id } = useParams();
    console.log(article_id)

    const { supabase } = useSupabase();

    const formatDate = (dateString) => {
      if (!dateString) return 'Date not available'; // Handle undefined or null dateString
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date'; // Handle invalid date
      return format(date, 'dd. MMMM. yyyy');
  };

    const getArticleDetails = async () => {
        if(supabase){
            const { data, error } = await supabase
                .from('articles')
                .select('id, published_at, title, teaser, html_content, is_news, slug, image_url')
                .eq('id', article_id)
                .single()
            if(error){
                console.error(error);
            }else{
                setData(data)
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getArticleDetails();
    },[supabase]);


    return (
      <section className={styles.ArticleDetails}>
          <h1>Artikler</h1>
          <div className={styles.ArticleCards}>
              
                  
                  <div className={styles.Card}>

                  <div className={styles.Text}>
                      <div>
                      <h4>{data.title}</h4>
                      <p>{data.teaser}</p>
                      <b>{formatDate(data.published_at)}</b>
                      </div>
  
                      <div className={styles.cardImg}>
                          <img src={data.image_url} alt="ArticleImage" />
                      </div>
  
                      
                      
                      <p className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: data.html_content || '' }} />
                      </div>
                  </div>
          </div>
      </section>
    )
}
