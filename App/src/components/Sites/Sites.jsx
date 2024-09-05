import React from 'react'
import styles from './Sites.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";


export const Sites = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);


    const getSiteData = async () => {
        if(supabase){
            const { data, error } = await supabase
                .from('recycling_sites')
                .select('id, name, address, zipcode, city, country, email, phone, longitude, latitude')
            if(error){
                console.error(error);
            }else{
                setData(data)
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getSiteData();
    },[supabase]);

    // <RiStarSFill /> //
    // <RiStarSLine /> //

    return (
        <section className={styles.SitesContainer}>
            <h1>Genbrugsstationer</h1>
            <div className={styles.SitesCards}>
                {data.map((item) => (
                    <Link key={item.id} to={`/:section_id`}>
                        <div className={styles.CardImg}>
                            <iframe
                                width="300"
                                height="170"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://maps.google.com/maps?q=${item.longitude},${item.latitude}&hl=en&z=14&output=embed`}
                                title={`Map for ${item.name}`}  
                            >
                            </iframe>
                        </div>
                        <div className={styles.CardInfo}>
                            <div className={styles.Location}>
                                <h2>{item.name}</h2>
                                <p>{item.address}</p>
                            </div>
                            <div className={styles.Rating}></div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      )
    
}
