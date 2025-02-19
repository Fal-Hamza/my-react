import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta
          name="description"
          content="Cssssssssssssssss"/>
      </Helmet>

      <Header />

      <MainContent pageName="Page CSS" />

      <Footer />
    </>
  );
};

export default Css;
