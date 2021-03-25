import ButtonContainer, { Button } from "./Button";
import Image from "./ImageContainer";
import Title from "./TitleContainer";
const IntroPage = () => (
  <>
    <div className="IntroPage">
      <Image />
      <Title />
      <ButtonContainer>
        <Button link="/about">About</Button>
        <Button link="/shop">Shop</Button>
        <Button link="/blog">Blog</Button>
      </ButtonContainer>
    </div>
    <style jsx>{`
      .IntroPage {
        position: relative;
        height: 100vh;
        width: 100vw;
        border: yellow solid thick;
      }
    `}</style>
  </>
);
export default IntroPage;
