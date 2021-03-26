import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <>
    <div className="NavBar">
      <nav className="links-container">
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
        <Link href="/shop">
          <a>Shop</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/pack">
          <a>Pack</a>
        </Link>
      </nav>
      <div className="image-slicer">
        <img src="/Karrervan.svg" alt="Karrervan logo" />
      </div>
    </div>
    <style jsx>{`
      .NavBar {
        display: flex;
        height: 6vh;
        width: 100vw;
        position: fixed;
        background: white;
        opacity: 0.6;
      }
      .links-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80vw;
        height: 100%;
      }
      .links-container a {
        color: var(--main-grey);
        font-size: calc(0.5vw + 15px);
        opacity: 1;
      }
      .image-slicer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 40px;
        width: 30%;
      }
      .image-slicer img {
        height: 100%;
      }
    `}</style>
  </>
);

export default NavBar;
