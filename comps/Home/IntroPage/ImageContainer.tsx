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
        max-width: 1500px;
        width: 80vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
      }
    `}</style>
  </>
);

export default ImageContainer;
