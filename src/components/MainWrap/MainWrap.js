import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Calendly from "@components/Calendly/Calendly";

const MainWrap = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        {children}
        <Calendly />
      </main>
      <Footer />
    </>
  );
};

export default MainWrap;
