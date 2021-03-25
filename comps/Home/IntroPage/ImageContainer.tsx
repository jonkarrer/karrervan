import Image from "next/image";

const ImageContainer = () => (
  <>
    <div className="ImageContainer">
      <Image
        src="/Home/home_page_mountain.jpg"
        alt="Big mountain picture"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <style jsx>{`
      .ImageContainer {
        border: blue solid thin;
        max-width: 1000px;
        width: calc(50vw + 100px);
        height: 100vh;
        position: absolute;
        right: 0;
        z-index: -1;
      }
    `}</style>
  </>
);

export default ImageContainer;
