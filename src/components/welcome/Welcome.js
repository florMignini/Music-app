import React from "react";
import ImageWelcome from "../../utils/spotify.jpeg";
import {
  Container,
  WelcomeLink,
  TitleContainer,
  Title,
  ImgWelcomeContainer,
  Image,
} from "./WelcomeStyle";

const Welcome = () => {
  return (
    <Container>
      <WelcomeLink>
        <ImgWelcomeContainer>
          <Image src={ImageWelcome} alt="ImageWelcome" />
        </ImgWelcomeContainer>
        <TitleContainer>
          <Title>Your favorite artist are here!</Title>
        </TitleContainer>
      </WelcomeLink>
    </Container>
  );
};

export default Welcome;
