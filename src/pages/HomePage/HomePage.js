import "../HomePage/homepage.scss";
import Img from "../../assets/img/HomePage.jpg";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <header className="homeContainer">
        <h1 className="hometitle">
          Accompanied by the Little Blue Welcome to Blues Family!
        </h1>
      </header>
      <main className="imgContainer">
        <Banner />
        <img className="homePageImg" src={Img} alt="homepageimg" />
      </main>
    </div>
  );
};

export default HomePage;
