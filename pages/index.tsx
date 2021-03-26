import Head from "next/head";
import Image from "next/image";
import NavBar from "comps/NavBar";
import IntroPage from "comps/IntroPage";
import LargeTitle from "comps/LargeTitle";
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
            <Image
              src="/Destinations/colorado_backpack.jpg"
              alt="Picture of a colorado mountain"
              height={300}
              width={300}
              className={styles.coloradoBackPack}
            />
            <Image
              src="/Destinations/faye_canyon.JPG"
              alt="Picture of faye canyon"
              height={240}
              width={320}
              className={styles.faye_canyon}
            />
            <Image
              src="/Destinations/cathedral_rock.jpg"
              alt="Red Rock Arizona pick"
              height={300}
              width={400}
              className={styles.cathedralRock}
            />

            <Image
              src="/Destinations/kansas.jpg"
              alt="Picture of a camp in kansas"
              height={370}
              width={370}
              className={styles.kansas}
            />
            <Image
              src="/Destinations/tennessee.jpg"
              alt="Picture of a smokey mountain"
              height={370}
              width={370}
              className={styles.leConte}
            />
            <Image
              src="/Destinations/mt_ida.jpg"
              alt="Picture of a camp on mt. ida Arkansas"
              height={600}
              width={600}
              className={styles.mtIda}
            />
            <Image
              src="/Destinations/ozarks.jpg"
              alt="Ozark mountains"
              height={300}
              width={230}
              className={styles.ozarks}
            />
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
