import Head from "next/head";
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
        <div className="filler"></div>
      </main>
      <style jsx>{`
        .filler {
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
