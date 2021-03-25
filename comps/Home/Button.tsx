import Link from "next/link";

interface ButtonProps {
  children: string;
  link: string;
}
const Button = ({ children, link }: ButtonProps) => (
  <>
    <div className="Button">
      <Link href={link}>
        <h3>{children}</h3>
      </Link>
    </div>
    <style jsx>{`
      .Button {
        border: var(--main-grey) solid 2px;
        max-height: 95px;
        max-width: 300px;
        height: 50%;
        width: 20%;
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

export default Button;
