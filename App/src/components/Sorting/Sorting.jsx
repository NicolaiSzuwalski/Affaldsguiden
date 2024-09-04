import React from 'react'
import styles from './Sorting.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'

export const Sorting = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);

    const getSortingData = async () => {
        if(supabase){
            const { data, error } = await supabase
                .from('trash_sections')
                .select('id, title, description, color, image_url')
            if(error){
                console.error(error);
            }else{
                setData(data)
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getSortingData();
    },[supabase]);

    return (
        <section className={styles.SectionContainer}>
            <h1>Sorteringsguide</h1>
            <p>Vælg en sektion</p>
            <div className={styles.SortingCards}>
                {data.map((item) => {
                    return (
                    <Link to='/:section_id'>
                        <div key={item.id} className={styles.Card}>
                            <article className={styles.CardName} style={{ backgroundColor: `#${item.color}` }}>
                                <h2 className={styles.Title}>{item.title}</h2>
                            </article>
                            <div className={styles.CardImg}>
                                <img src={item.image_url} alt="TrashImg" />
                            </div>
                        </div>
                    </Link>
                    );
                })}
            </div>
        </section>
    );
}
