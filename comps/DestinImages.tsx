import Image from "next/image";

const DestinImages = () => (
  <>
    <div className="destin-container">
      <div className="leftGroup">
        <Image
          src="/Destinations/colorado_backpack.jpg"
          alt="Picture of a colorado mountain"
          height={300}
          width={300}
          className="colorado"
        />
        <Image
          src="/Destinations/faye_canyon.JPG"
          alt="Picture of faye canyon"
          height={240}
          width={320}
          className="faye"
        />
        <Image
          src="/Destinations/ozarks.jpg"
          alt="Ozark mountains"
          height={300}
          width={230}
          className="ozarks"
        />
        <Image
          src="/Destinations/cathedral_rock.jpg"
          alt="Red Rock Arizona pick"
          height={300}
          width={400}
          className="cathedralRock"
        />
      </div>
      <Image
        src="/Destinations/mt_ida.jpg"
        alt="Picture of a camp on mt. ida Arkansas"
        height={600}
        width={600}
        className="mtIda"
      />
      <div className="right-group">
        <Image
          src="/Destinations/tennessee.jpg"
          alt="Picture of a smokey mountain"
          height={370}
          width={370}
          className="Leconte"
        />
        <Image
          src="/Destinations/kansas.jpg"
          alt="Picture of a camp in kansas"
          height={370}
          width={370}
          className="kansas"
        />
      </div>
    </div>
    <style jsx>{`
      .destin-container {
        display: flex;
      }
      .leftGroup {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-columns: auto auto;
      }
    `}</style>
  </>
);

export default DestinImages;
