import Button from "./Button";
import Image from "next/image";
const IntroPage = () => (
  <>
    <div className="IntroPage">
      <div className="image-container">
        {/**
         * priority = true -> will preload the image.
         * layout will throw a type error if width and height are added with fill
         */}
        <Image
          src="/Intro/home_page_mountain.jpg"
          alt="Big mountain picture"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="title-container">
        <Image
          src="/Intro/Karrervan.jpg"
          alt="Karravan title"
          height={200}
          width={1000}
        />
      </div>
      <div className="button-container">
        <Button link="/about">About</Button>
        <Button link="/shop">Shop</Button>
        <Button link="/blog">Blog</Button>
      </div>
    </div>
    <style jsx>{`
      .IntroPage {
        height: 100vh;
        width: 100vw;
        position: relative;
        z-index: 1;
        background: white;
      }
      .button-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: auto;
        width: calc(50vw + 60px);
        margin-top: calc(70vh + 50px);
        margin-left: 5vw;
        position: absolute;
      }
      .image-container {
        max-width: 1500px;
        width: 80vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
      }
      .title-container {
        margin-top: calc(15vh + 50px);
        margin-left: 3vw;
        margin-right: 100px;
        position: absolute;
      }
    `}</style>
  </>
);
export default IntroPage;
