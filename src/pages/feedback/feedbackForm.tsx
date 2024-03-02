import { StyledFeedbackForm } from "./styles";
import Typography from "../../components/typography/typography";
import SerasaLogo from "../../assets/serasa-logo-full";
import TextInput from "../../components/input/input";
import StarsRating from "../../components/starsRating/starsRating";
import Button from "../../components/button/button";
import { useState } from "react";
import { useToast } from "../../context/toastContext";
import LoadingScreen from "../../components/loadingScreen/loadingScreen";

export interface IFormFeedbackData {
  name: string;
  commentary: string;
  rate: number;
}

const FeedbackForm = () => {
  const addToast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IFormFeedbackData>({
    name: "",
    commentary: "",
    rate: 0,
  });

  const requestSubmit = () => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve({ status: 200 });
      }, 3000);
    });
  };

  const onSubmit = () => {
    requestSubmit().then(() => {
      if (addToast) {
        addToast({
          message: "Obrigado por avaliar nossos serviços.",
          type: "success",
          id: 1,
        });
      }
    });
  };

  return (
    <StyledFeedbackForm>
      {loading && <LoadingScreen />}

      <form action="">
        <div className="logo">
          <SerasaLogo height="150px" width="150px" />
        </div>

        <Typography $centerText size="bodyM" $spacingY="medium">
          Conte o quanto você está satisfeito com nossos serviços
        </Typography>

        <Typography $centerText size="subheading">
          Marque de 1 à 5 estrelas
        </Typography>

        <StarsRating rate={data.rate} setRate={setData} />

        <TextInput
          name="name"
          label="Nome"
          setState={setData}
          value={data.name}
        />

        <TextInput
          name="commentary"
          label="Comentário (Opcional)"
          setState={setData}
          value={data.commentary}
        />

        <Button
          onClick={onSubmit}
          label="Enviar avaliação"
          disabled={!data.name && data.rate != 0}
        />
      </form>
    </StyledFeedbackForm>
  );
};

export default FeedbackForm;
