import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta
          name="description"
          content="Htmmmmmmmmmmmmmmmmmmmmmml"
        />
      </Helmet>

      <Header />

      <MainContent pageName="Page Html" />

      <Footer />
    </>
  );
};

export default Html;
