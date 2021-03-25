import Link from "next/link";

interface ButtonProps {
  children: string;
  link: string;
}
const Button = ({ children, link }: ButtonProps) => (
  <>
    <div className="Button">
      <Link href={link}>
        {/* 
       calc(2vw + 10px) dynamically changes the font size. + 10px sets a 
        minimum font size on mobile.
        */}
        <h3 style={{ fontSize: "calc(2vw + 15px)" }}>{children}</h3>
      </Link>
    </div>
    <style jsx>{`
      .Button {
        text-decoration: underline;
        max-height: 95px;
        max-width: 300px;
        height: auto;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      .Button:hover {
        cursor: pointer;
      }
    `}</style>
  </>
);

export default Button;
