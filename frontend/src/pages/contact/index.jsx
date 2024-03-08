import { useDispatch, useSelector } from "react-redux";
import { count } from "../../redux/reducer/home";
import { Button } from "react-bootstrap";

const Contact = () => {
  const { countNumber } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  return (
    <div className="h-[calc(100vh-124px)]">
      <div className="container">
        <Button
          className="bg-blue-600"
          onClick={() => dispatch(count(countNumber + 1))}
        >
          Count
        </Button>
        <h1>{countNumber}</h1>
      </div>
    </div>
  );
};

export default Contact;
