import Image from "next/image";

const TitleContainer = () => (
  <>
    <div className="TitleContainer">
      <Image
        src="/Home/Karrervan.jpg"
        alt="Karravan title"
        height={180}
        width={1000}
      />
    </div>
    <style jsx>{`
      .TitleContainer {
        border: green solid thick;
        margin: 5vh;
        margin-top: 10vh;
        margin-left: 5vw;
        position: absolute;
      }
    `}</style>
  </>
);

export default TitleContainer;
