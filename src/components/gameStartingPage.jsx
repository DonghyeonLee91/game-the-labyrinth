import React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "@stitches/react";

import backgroundImage from "../assets/images/initImage.png";
import GameStartingPageHeader from "./gameStartingPageHeader";
import Button from "./button";
import useModal from "../hooks/useModal";
import BUTTON_NAME from "../constants/buttonName";

function GameStartingPage() {
  const [GuideModal, handleModal] = useModal();
  const navigate = useNavigate();

  return (
    <GameStartingPageContainer>
      <GameStartingPageHeader />
      <GuideModal>Game Guide</GuideModal>
      <ButtonContainer>
        <Button onClick={handleModal} buttonName={BUTTON_NAME.GUIDE} />
        <Button
          onClick={() => navigate("/game")}
          buttonName={BUTTON_NAME.START}
        />
      </ButtonContainer>
    </GameStartingPageContainer>
  );
}

const GameStartingPageContainer = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
});

const ButtonContainer = styled("div", {
  display: "flex",
  position: "relative",
  top: "50%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default GameStartingPage;
