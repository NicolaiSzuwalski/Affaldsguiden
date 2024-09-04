import React from "react";
import { GradientWrapper } from "../../components/GradientWrapper/GradientWrapper";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import Buckets from "../../assets/images/Paintbuckets.png";
import styles from "./HomePage.module.scss";
import { HomeCards } from "../../components/HomeCards/HomeCards";
import Arrow from "../../assets/images/Arrow.png";
import TrashForrest from "../../assets/images/affaldSkov.jpg";
import TrashSorting from "../../assets/images/affaldsSortering1.jpg";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <GradientWrapper>
        <ContentWrapper>
          <section className={styles.Content1}>
            <img src={Buckets} alt="buckets" />
          </section>
          <HomeCards />
        </ContentWrapper>
      </GradientWrapper>
      <section className={styles.Content2}>
        <article className={styles.Article}>
          <h2>
            Hvad sker der med 
            <br />
            <span>dit sorterede affald?</span>
          </h2>
          <p>
            Dit affald gør en forskel, når ressourcerne skal bruges igen. Jo
            bedre, du sorterer, jo mere kommer der ud af det
          </p>
          <NavLink to='/Articles'>
          <span className={styles.Arrow}>
            <img src={Arrow} alt="Arrow" />
          </span>
          </NavLink>
        </article>

        <div className={styles.ArticleImg}>
          <img src={TrashForrest} alt="affaldSkov" />
        </div>
      </section>

        <section className={styles.Content3}>

          <div className={styles.ArticleImg3}>
            <img src={TrashSorting} alt="" />
          </div>

          <article className={styles.Article3}>
            <div className={styles.text1}>
            <h2>Få gode idéer til, hvordan du gør det nemt at sortere affaldet hjemme hos dig.</h2>
            </div>

            <div className={styles.text2}>
              <h1>Tips og tricks til at <br /> <span>sortere dit affald</span></h1>
              <NavLink to='/Articles'>
              <span className={styles.sectionArrow}>
                <img src={Arrow} alt="arrow" />
              </span>
              </NavLink>
            </div>
          </article>
        </section>
    </>
  );
};
