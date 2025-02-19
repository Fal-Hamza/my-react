import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
    
      <Helmet>
        <title>JAVA Page</title>
        <meta
          name="description"
          content="javaScript"
        />
      </Helmet>

      <Header />

      <MainContent pageName="Page Javascript" />

      <Footer />
    </>
  );
};

export default Javascript;
