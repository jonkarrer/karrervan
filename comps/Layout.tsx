import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
