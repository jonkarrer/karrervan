const LargeTitle = ({ children }) => (
  <>
    <div className="LargeTitle">
      <h1>{children}</h1>
    </div>
    <style jsx>{`
      .LargeTitle {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100px;
      }
      h1 {
        font-size: calc(4.5vw + 4em);
        margin-left: 5%;
        color: white;
        font-weight: bold;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
    `}</style>
  </>
);

export default LargeTitle;
