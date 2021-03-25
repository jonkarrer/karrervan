const ButtonContainer = ({ children }) => (
  <>
    <div className="ButtonContainer">{children}</div>
    <style jsx>{`
      .ButtonContainer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: auto;
        width: calc(50vw + 60px);
        margin-top: calc(70vh + 50px);
        margin-left: 5vw;
        position: absolute;
      }
    `}</style>
  </>
);
export default ButtonContainer;
