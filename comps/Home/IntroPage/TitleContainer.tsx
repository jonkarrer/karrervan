import Image from "next/image";

const TitleContainer = () => (
  <>
    <div className="TitleContainer">
      <Image
        src="/Home/Karrervan.jpg"
        alt="Karravan title"
        height={200}
        width={1000}
      />
    </div>
    <style jsx>{`
      .TitleContainer {
        margin-top: calc(15vh + 50px);
        margin-left: 3vw;
        margin-right: 100px;
        position: absolute;
      }
    `}</style>
  </>
);

export default TitleContainer;
