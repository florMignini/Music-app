import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(70, 252, 198, 1) 67%
  );
`;

export const WelcomeLink = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
export const ImgWelcomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
export const Image = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 5px;
  object-fit: cover;
  margin: 3rem;
  border-radius: 50px;
  opacity: 0.8;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;
export const Title = styled.h2`
  width: 40%;
  height: auto;
  margin-right: 10%;
  font-size: 5rem;
  font-weight: 600;
  color: var(--font-color);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 870px) {
    font-size: 4rem;
  }
`;
