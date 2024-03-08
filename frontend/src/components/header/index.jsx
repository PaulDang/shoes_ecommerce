import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Home",
      onClick: () => navigate("/home"),
    },
    {
      title: "Shop",
      onClick: () => navigate("/shop"),
    },
    {
      title: "About",
      onClick: () => navigate("/about"),
    },
    {
      title: "Contact",
      onClick: () => navigate("/contact"),
    },
  ];

  return (
    <div className="flex justify-center items-center my-4">
      <ToggleButtonGroup
        className="gap-20"
        type="radio"
        name="options"
        defaultValue="Home"
      >
        {data.map((item) => {
          return (
            <button
              className="font-semibold "
              key={item.title}
              onClick={item.onClick}
              id={item.title}
              value={item.title}
            >
              {item.title}
            </button>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
};
