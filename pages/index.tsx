import Head from "next/head";
import Button from "../comps/Home/Button";
import ButtonContainer from "../comps/Home/ButtonContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karrervan Travel Blog</title>
      </Head>
      <ButtonContainer>
        <Button link="/about">About</Button>
        <Button link="/shop">Shop</Button>
        <Button link="/blog">Blog</Button>
      </ButtonContainer>
    </div>
  );
}
