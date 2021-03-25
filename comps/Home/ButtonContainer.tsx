const ButtonContainer = ({ children }) => (
  <>
    <div className="ButtonContainer">{children}</div>
    <style jsx>{`
      .ButtonContainer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: red solid thin;
        height: auto;
        width: 50vw;
      }
    `}</style>
  </>
);

export default ButtonContainer;
