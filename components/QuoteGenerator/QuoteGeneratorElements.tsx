import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #270091, #f3ae00);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  padding: 20px;
  margin-left: -10px;
  margin-top: -10px;
`;
export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  padding: 20px;
  right: -10px;
  bottom: -10px;
`;

export const FootCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Source Code pro", monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 999999;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    color: #ffffffd7;
  }
`;
export const FloatingButton = styled(Link)`
  color: white;
  transition: 0.4s;
  padding: 10px 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 20%);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 9999999;
  &:hover {
    color: #ffffffd7;
  }
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(232, 232, 232, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const QuoteGeneratorTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 50px;
  text-align: center;
  color: white;
  padding: 0px 20px 0px 20px;
  position: relative;
  /* media query */
  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: "Caveat", cursive;
  font-size: 35px;
  position: relative;
  width: 100%;
  word-wrap: break-word;
  text-align: center;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

export const GenerateQuoteButton = styled.div`
  border: 2px solid darkgrey;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px 40px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  background: rgba(0, 0, 70, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    filter: brightness(2);
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: white;
  font-family: "Caveat", cursive;
  font-size: 35px;
  width: 100%;
  text-align: center;
`;
