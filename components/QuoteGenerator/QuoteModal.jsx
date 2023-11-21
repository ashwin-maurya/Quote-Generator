// QuoteModal.js
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  overflow-y: scroll;
`;

const ModalContent = styled.div`
  position: relative;
  width: 80vw;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 95vw;
  }
`;

const QuoteImage = styled(Image)`
  max-width: 70vw;
  height: auto;
  max-height: 80vh;
  @media only screen and (max-width: 800px) {
    max-width: 90vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 10;
  justify-content: space-evenly;
`;

const CloseButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px 20px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  background: rgba(255, 84, 84, 0.5);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background: rgba(255, 84, 84, 0.8);
  }
`;

const DownloadButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  background: rgba(101, 255, 84, 0.5);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background: rgba(101, 255, 84, 0.8);
  }
`;

const RegenerateButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  background: rgba(57, 255, 252, 0.5);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background: rgba(57, 255, 252, 0.8);
  }
`;
const Loader = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  width: 100%;
  height: auto;
  height: 70vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuoteModal = ({ imageURL, onClose, onDownload, onRegenerate }) => {
  const [loading, setLoading] = useState(false);

  const handleClickOutsideModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleRegenerateClick = async () => {
    setLoading(true);
    await onRegenerate();
    setLoading(false);
  };
  return (
    <ModalWrapper onClick={handleClickOutsideModal}>
      <ModalContent>
        {loading ? (
          <Loader>Generating...</Loader>
        ) : (
          <QuoteImage
            src={imageURL}
            height={500}
            width={800}
            alt="Generated Quote Image"
          />
        )}
        <ButtonWrapper>
          <DownloadButton onClick={onDownload}>Download Quote</DownloadButton>
          <RegenerateButton onClick={handleRegenerateClick}>
            Regenerate
          </RegenerateButton>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default QuoteModal;
