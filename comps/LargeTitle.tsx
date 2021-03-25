const LargeTitle = ({ children }) => (
  <>
    <h1>{children}</h1>
    <style jsx>{`
      h1 {
        font-size: 10em;
      }
    `}</style>
  </>
);

export default LargeTitle;
