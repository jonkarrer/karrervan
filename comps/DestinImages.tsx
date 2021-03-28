import Image from "next/image";

const DestinImages = () => (
  <>
    <div className="destin-container">
      <div className="left-group">
        <div className="colorado">
          <div className="overlay">
            <p>Colorado</p>
          </div>
        </div>
        <div className="faye">
          <div className="overlay">
            <p>Faye Canyon</p>
          </div>
        </div>
        <div className="ozarks">
          <div className="overlay">
            <p>Ozarks</p>
          </div>
        </div>
        <div className="sedona">
          <div className="overlay">
            <p>Sedona</p>
          </div>
        </div>
      </div>
      <div className="mt-ida">
        <div className="overlay">
          <p>Mt. Ida</p>
        </div>
      </div>
      <div className="right-group">
        <div className="leconte">
          <div className="overlay">
            <p>Tennessee</p>
          </div>
        </div>
        <div className="kansas">
          <div className="overlay">
            <p>Kansas</p>
          </div>
        </div>
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
        height: 550px;
        width: 90vw;
        max-width: 1500px;
      }
      .destin-container:hover {
        cursor: pointer;
      }
      .left-group {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-columns: auto auto;
        height: 400px;
        width: auto;
      }
      .right-group {
        display: grid;
        height: 600px;
      }
      p {
        font-size: 3em;
        color: white;
      }
      .overlay {
        display: none;
        align-items: center;
        justify-content: center;
      }
      .colorado {
        background-image: url("/Destinations/colorado_backpack.jpg");
        background-position: center;
        background-size: cover;
        height: 200px;
        width: 270px;
      }
      .colorado:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .faye {
        background-image: url("/Destinations/faye_canyon.JPG");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
        width: 270px;
      }
      .faye:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .ozarks {
        background-image: url("/Destinations/ozarks.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
        width: 270px;
      }
      .ozarks:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .sedona {
        background-image: url("/Destinations/cathedral_rock.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
        width: 270px;
      }
      .sedona:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .mt-ida {
        background-image: url("/Destinations/mt_ida.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
        width: 500px;
      }
      .mt-ida:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .leconte {
        background-image: url("/Destinations/tennessee.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        width: 300px;
      }
      .leconte:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .kansas {
        background-image: url("/Destinations/kansas.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        width: 300px;
      }
      .kansas:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </>
);

export default DestinImages;
