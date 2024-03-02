import { useState } from "react";
import { StyledStarsRating } from "./styles";
import { IFormFeedbackData } from "../../pages/feedback/feedbackForm";

interface IStarsRating {
  setRate: React.Dispatch<React.SetStateAction<IFormFeedbackData>>;
  rate: number;
}

const StarsRating = ({ setRate, rate }: IStarsRating) => {
  const [hover, setHover] = useState(0);

  const handleRate = (index: number) => {
    setRate((prevState: IFormFeedbackData) => {
      return { ...prevState, rate: index };
    });
  };

  return (
    <StyledStarsRating>
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            tabIndex={index}
            className={index <= (hover || rate) ? "on" : "off"}
            onClick={() => handleRate(index)}
            onMouseEnter={() => {
              setHover(index);
              handleRate(index);
            }}
            onMouseLeave={() => {
              setHover(rate);
              handleRate(index);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </StyledStarsRating>
  );
};

export default StarsRating;
