import Head from "next/head";
import IntroPage from "../comps/Home/IntroPage/IntroPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karrervan Travel Blog</title>
      </Head>
      <section className={styles.Home}>
        <IntroPage />
      </section>
    </div>
  );
}
