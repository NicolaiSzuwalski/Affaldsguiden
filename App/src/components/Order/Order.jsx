import { useEffect, useState } from "react";
import { useSupabase } from "../../providers/SupabaseProvider";
import { useForm } from "react-hook-form";
import styles from './Order.module.scss';

export const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { supabase } = useSupabase();

  const [containerList, setContainerList] = useState([]);

  const getContainerList = async () => {
    if(supabase){
      const { data, error } = await supabase
      .from('containers')
      .select('id, name, icon_svg')
      if(error){
        console.error(error);
      }else{
        setContainerList(data)
      }
    }
  }

  useEffect(()=>{
    getContainerList();
  },[setContainerList, supabase])

if(containerList.length){
console.log(containerList)
}

  const createOrder = async (formdata) => {
    console.log(formdata);
    if (supabase) {
      const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          email: formdata.email,
          fullname: formdata.name,
          address: formdata.address,
          zipcode: formdata.zipcode,
          city: formdata.city,
          phone: formdata.phone,
          container_id: formdata.container_id
        }
      ]);
      if (error) {
        console.error(error);
      } else {
        setSubmitted(true);
      }
    }
  };



  return (
    <div className={styles.OrderMain}>
      <h1>Bestil affaldscontainer</h1>
      <h5>Hvis i mangler en affaldscontainer i din husstand kan du bestille en, ved at udfylde og sende formularen herunder.</h5>
      <p>Vælg en af følgende container typer</p>
      <div className={styles.ChooseContainer}>

      </div>
      {submitted ? (
        <p className={styles.confirmed}> Din bestilling er bekræftet, du modtager en kvittering via email  </p>
      ) : (
        <form noValidate onSubmit={handleSubmit(createOrder)}>
          {containerList && containerList.map(item =>{
            return(
              <div key={item.id}>
              <label>{item.name}</label>
              <input type="radio" {...register('container_id')} value={item.id}/>
              </div>
            );
          })}
          <p>Containeren leveres til</p>
          
          {/* Name */}
          <input
            id='name' type="text" 
            placeholder="Indtast dit navn"
            {...register("name", {
              required: 'Du skal udfylde feltet',
              minLength: { value: 2, message: "Navn skal være mindst 2 tegn" }
            })}
          />
          {errors.name && <span style={{color : 'red'}}>{errors.name.message}</span>}

          {/* Address */}
          <input
            id='address' type="text" 
            placeholder="Indtast din adresse"
            {...register("address", {
              required: 'Du skal udfylde feltet',
              minLength: { value: 5, message: "Adresse skal være mindst 5 tegn" }
            })}
          />
          {errors.address && <span style={{color : 'red'}}>{errors.address.message}</span>}

          {/* Zipcode */}
          <input
            id='zipcode' type="text" 
            placeholder="Indtast dit postnummer"
            {...register("zipcode", {
              required: 'Du skal udfylde feltet',
              pattern: {
                value: /^[0-9]{4,5}$/,
                message: 'Postnummer skal bestå af 4 eller 5 cifre'
              }
            })}
          />
          {errors.zipcode && <span style={{color : 'red'}}>{errors.zipcode.message}</span>}

          {/* City */}
          <input
            id='city' type="text" 
            placeholder="Indtast din by"
            {...register("city", {
              required: 'Du skal udfylde feltet',
              minLength: { value: 2, message: "By skal være mindst 2 tegn" }
            })}
          />
          {errors.city && <span style={{color : 'red'}}>{errors.city.message}</span>}

          {/* Phone */}
          <input
            id='phone' type="tel" 
            placeholder="Indtast dit telefonnummer"
            {...register("phone", {
              required: 'Du skal udfylde feltet',
              pattern: {
                value: /^[0-9]{8}$/,
                message: 'Telefonnummer skal være 8 cifre'
              }
            })}
          />
          {errors.phone && <span style={{color : 'red'}}>{errors.phone.message}</span>}

          {/* Email */}
          <input
            id='email' type="email" 
            placeholder="Indtast din email"
            {...register("email", {
              required: 'Du skal udfylde feltet',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Du skal indtaste en gyldig email adresse'
              }
            })}
          />
          {errors.email && <span style={{color : 'red'}}>{errors.email.message}</span>}

          
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};