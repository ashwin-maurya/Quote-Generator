import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import QuoteModal from "@/components/QuoteGenerator/QuoteModal";

//components
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
  FooterLink,
  QuoteGeneratorCon,
  FootCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  FloatingButton,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

//assets
import Scene from "../assets/scene.png";
import Cat from "../assets/cat.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [generatedImageURL, setGeneratedImageURL] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const generateQuote = async () => {
    try {
      setIsLoading(true); // Set loading state to true when starting the generation

      const response = await fetch("/api/generateQuote", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const blobData = await response.blob();
      const imageURL = URL.createObjectURL(blobData);

      // Display the generated image on the screen
      setGeneratedImageURL(imageURL);

      // Increment the count of generated quotes
      setNumberOfQuotes((prevCount) => (prevCount as number) + 1);

      // Open the modal
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error generating quote:", error);
    } finally {
      setIsLoading(false); // Set loading state to false when generation is complete
    }
  };

  const handleDownload = () => {
    if (generatedImageURL) {
      // Create a temporary download link
      const downloadLink = document.createElement("a");
      downloadLink.href = generatedImageURL;
      downloadLink.download = "generated_quote_image.jpg";

      // Simulate a click on the link to trigger the download
      downloadLink.click();
    } else {
      console.error("No generated image to download");
    }
  };

  const handleCloseModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun quote generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isModalOpen && generatedImageURL && (
        <QuoteModal
          imageURL={generatedImageURL}
          onClose={handleCloseModal}
          onDownload={handleDownload}
          onRegenerate={generateQuote}
        />
      )}
      {/* BackGround */}
      <GradientBackgroundCon>
        {/* Quote Generator MOdal */}
        {/* <QuoteGeneratorModal/> */}

        {/* Quote Generator */}
        <FloatingButton
          href="https://zenquotes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ZentQutoes
        </FloatingButton>
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>Quote Generator</QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Generate Quotes for free!!
            </QuoteGeneratorSubTitle>
            {isLoading ? ( // Display "Generating..." when loading
              <GenerateQuoteButton>
                <GenerateQuoteButtonText>Generating...</GenerateQuoteButtonText>
              </GenerateQuoteButton>
            ) : (
              <GenerateQuoteButton onClick={generateQuote}>
                <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
              </GenerateQuoteButton>
            )}
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Cat} height="400" alt="Cloud Image" />
        <BackgroundImage2 src={Scene} height="400" alt="Cloud Image" />

        {/* Footer */}
        <FootCon>
          <>
            Quotes Genreated: {numberOfQuotes}
            <br />
            Developed by{" "}
            <FooterLink
              href="https://www.linkedin.com/in/ashwin-maurya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ashwin-maurya
            </FooterLink>
          </>
        </FootCon>
      </GradientBackgroundCon>
    </>
  );
}
