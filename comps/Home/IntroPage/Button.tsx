import Link from "next/link";

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
        width: calc(60vw + 50px);
        margin-top: calc(70vh + 50px);
        margin-left: 2vw;
      }
    `}</style>
  </>
);
export default ButtonContainer;

interface ButtonProps {
  children: string;
  link: string;
}
export const Button = ({ children, link }: ButtonProps) => (
  <>
    <div className="Button">
      <Link href={link}>
        {/* 
       calc(2vw + 10px) dynamically changes the font size. + 10px sets a 
        minimum font size on mobile.
        */}
        <h3 style={{ fontSize: "calc(2vw + 10px)" }}>{children}</h3>
      </Link>
    </div>
    <style jsx>{`
      .Button {
        border: var(--main-grey) solid 1px;
        max-height: 95px;
        max-width: 300px;
        height: auto;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .Button:hover {
        cursor: pointer;
      }
    `}</style>
  </>
);
