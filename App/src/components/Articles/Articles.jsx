import React from 'react'
import styles from './Articles.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'

export const Articles = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);

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
    <div>Articles</div>
  )
}
