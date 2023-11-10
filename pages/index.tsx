import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

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
import Cloud1 from "../assets/cloud-and-thunder.png";
import Cloud2 from "../assets/cloudy-weather.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun quote generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* BackGround */}
      <GradientBackgroundCon>
        {/* Quote Generator MOdal */}
        {/* <QuoteGeneratorModal/> */}

        {/* Quote Generator */}
        <FloatingButton
          href="https://www.linkedin.com/in/ashwin-maurya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ZentQutoes
        </FloatingButton>
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for an inspiration? Generate a Quote here and get started
              now!!
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Cloud1} height="300" alt="Cloud Image" />
        <BackgroundImage2 src={Cloud2} height="300" alt="Cloud Image" />

        {/* Footer */}
        <FootCon>
          <>
            Quotes Genreated: {numberOfQuotes}
            <br />
            Developed with ❤️ by{" "}
            <FooterLink
              href="https://www.linkedin.com/in/ashwin-maurya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ashwin
            </FooterLink>
          </>
        </FootCon>
      </GradientBackgroundCon>
    </>
  );
}
