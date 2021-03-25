import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
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
        height: 100vh;
        width: 100vw;
        position: relative;
      }
    `}</style>
  </>
);
export default IntroPage;
