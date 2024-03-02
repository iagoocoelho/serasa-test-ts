import { StyledLoadingScreen } from "./styles";
import Typography from "../typography/typography";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <Typography size="headingL" $centerText>Aguarde estamos processando...</Typography>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;
