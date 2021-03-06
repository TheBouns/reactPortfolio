import Tecnologies from "../tecnologies/tecnologies";
import "./home.css";
const Home = () => {
  return (
    <div id="welcome">
      <h1>The Bouns</h1>
      <h2>FullStack Developer Student</h2>
      <div className="line"></div>
      <img
        className="profilePicture"
        src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1644867152/balcno2_zqgecs.jpg"
      />
      <p>Welcome to my portfolio:</p>
      <p className="message">
        Take a look at my works, enjoy with my designs and be part of my journey
        to become a full stack developer
      </p>

      <Tecnologies />
      <div className="line"></div>
    </div>
  );
};
export default Home;
