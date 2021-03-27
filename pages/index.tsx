import Head from "next/head";
import NavBar from "comps/NavBar";
import IntroPage from "comps/IntroPage";
import LargeTitle from "comps/LargeTitle";
import DestinImages from "comps/DestinImages";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karrervan Travel Blog</title>
      </Head>
      <NavBar />
      <main>
        <IntroPage />
        <div className={styles.pageContainer} id="destinations-page">
          <div className={styles.imageCollage}>
            <DestinImages />
          </div>
          <LargeTitle>Destinations</LargeTitle>
        </div>
        <div className={styles.pageContainer} id="shop-page">
          <div className={styles.imageCollage}></div>
          <LargeTitle>Shop</LargeTitle>
        </div>
        <div className={styles.pageContainer} id="recipes-page">
          <div className={styles.imageCollage}></div>
          <LargeTitle>Recipes</LargeTitle>
        </div>
        <div className={styles.pageContainer} id="blog-page">
          <div className={styles.imageCollage}></div>
          <LargeTitle>Blog</LargeTitle>
        </div>
      </main>
    </div>
  );
}
