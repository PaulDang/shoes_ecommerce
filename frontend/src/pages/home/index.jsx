import { Image } from "react-bootstrap";
import Carousel1 from "../../assets/image/shoes-1.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-100 h-[calc(100vh-124px)]">
      <div className="container flex justify-between items-center h-full">
        <div>
          <h1 className="text-[4rem] font-semibold">Nike Air Jordan</h1>
          <button
            onClick={() => navigate("/shop")}
            className="font-semibold underline cursor-pointer text-xl mt-10"
          >
            Shop Now
          </button>
        </div>
        <Image src={Carousel1} fluid />
      </div>
    </div>
  );
};

export default Home;
