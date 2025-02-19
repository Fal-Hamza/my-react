import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta
          name="description"
          content="Hoooooooooooome"
        />
      </Helmet>

      <Header />

      <MainContent pageName="Page Home" />

      <Footer />
    </>
  );
};

export default Home;
