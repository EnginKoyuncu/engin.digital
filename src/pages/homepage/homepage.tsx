import Experiences from "../../components/experiences/Experiences";
import Header from "../../components/header/Header";
import LandingContainer from "../../components/landingcontainer/LandingContainer";

const HomePage = () => {
  return (
    <>
      <div className="bg_main">
        <div className="container">
        <Header />
        <LandingContainer />
      </div>
      </div>
      <Experiences />
    </>
  );
};

export default HomePage;
