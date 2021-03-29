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
      </div>
    </div>
    <style jsx>{`
      .destin-container {
        display: flex;
        height: 80%;
        width: 90vw;
        max-width: 2000px;
      }
      .destin-container:hover {
        cursor: pointer;
      }
      .left-group {
        flex: 1;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-columns: auto auto;
        height: 30vh;
        width: auto;
      }
      .right-group {
        flex: 1;
        display: grid;
        height: 600px;
        width: 300px;
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
      .colorado,
      .sedona,
      .faye,
      .ozarks,
      .mt-ida,
      .leconte,
      .kansas {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .colorado {
        background-image: url("/Destinations/colorado_backpack.jpg");
        height: 30vh;
        width: 20vw;
        max-height: 500px;
        max-width: 500px;
      }
      .colorado:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .faye {
        background-image: url("/Destinations/faye_canyon.JPG");
        height: 30vh;
        width: 20vw;
        max-height: 500px;
        max-width: 500px;
      }
      .faye:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .ozarks {
        background-image: url("/Destinations/ozarks.jpg");
        height: 30vh;
        width: 20vw;
        max-height: 500px;
        max-width: 500px;
      }
      .ozarks:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .sedona {
        background-image: url("/Destinations/cathedral_rock.jpg");
        height: 30vh;
        width: 20vw;
        max-height: 500px;
        max-width: 500px;
      }
      .sedona:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .mt-ida {
        flex: 2;
        background-image: url("/Destinations/mt_ida.jpg");
        max-height: 500px;
        max-width: 500px;
      }
      .mt-ida:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .leconte {
        background-image: url("/Destinations/tennessee.jpg");
        height: 320px;
        width: 22vw;
        max-width: 500px;
      }
      .leconte:hover > .overlay {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .kansas {
        background-image: url("/Destinations/kansas.jpg");
        height: 320px;
        width: 22vw;
        max-width: 500px;
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
