import sharp from "sharp";
import fetch from "node-fetch";
import path from "path";
import { Headers } from "node-fetch";

const apiURL = "https://zenquotes.io/api/random";

export default async function handler(req, res) {
  try {
    // Fetch a random quote
    const quoteData = await getRandomQuote(apiURL);
    console.log(quoteData);

    // Image Construction
    const width = 1280;
    const height = 720;
    const text = quoteData.quoteText;
    const words = text.split(" ");
    const lineBreak = 5;
    let newText = "";

    // Define tspan elements w/4 words each
    let tspanElements = "";
    for (let i = 0; i < words.length; i++) {
      newText += words[i] + " ";
      if ((i + 1) % lineBreak === 0) {
        tspanElements += `<tspan x="${
          width / 2
        }" dy="1.2em">${newText}</tspan>`;
        newText = "";
      }
    }
    if (newText !== "") {
      tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
    }

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title{
        fill:#ffffff;
        font-size:20px;
        font-weight:bold;
      }
      .quoteAuthorStyles{
        font-size:35px;
        font-weight:bold;
        padding:50px;
      }
      .footerStyles{
        font-size:20px;
        font-weight:bold;
        fill:lightgrey;
        text-anchor:middle;
        font-family:Verdana;
      }
      </style>
      <circle  cx="${
        width / 2
      }"  cy="100" r="44" fill="rgba(255,255,255,0.155)"/>
      <svg x="${
        width / 2 - 26
      }"  y="75" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
          
      <g>
      <rect x="0" y="0" width="${width}" height="auto"></rect>
      <text id="lastLineOfQuote"  x="${width / 2}" y="${
      height / 2 - 150
    }" font-family="Serif" font-size="50" fill="white" text-anchor="middle">
      ${tspanElements}
      <tspan class="quoteAuthorStyles"  x="${width / 2}"  dy="2em">- by ${
      quoteData.quoteAuthor
    }</tspan>
      </text>
      </g>
      <text x="${width / 2}" y="${
      height - 10
    }" class="footerStyles">Developed by @ashwin-maurya </text>
      </svg>
    `;

    const backgroundImages = [
      "public/backgrounds/BlueSkies.jpg",
      "public/backgrounds/VisionsofGrandeur.jpg",
      "public/backgrounds/PacificDream.jpg",
      "public/backgrounds/Orca.jpg",
      "public/backgrounds/LoveandLiberty.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedBackgroundImage = backgroundImages[randomIndex];
    // Composite this Image together
    const svgBuffer = Buffer.from(svgImage);

    // Generate the final image buffer
    const imageBuffer = await sharp(selectedBackgroundImage)
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toBuffer();

    // Send the response with the generated image buffer
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=generated_quote_image.jpg"
    );
    res.send(imageBuffer);
  } catch (error) {
    console.error("Error generating quote:", error);

    // Handle errors and send a valid JSON response
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getRandomQuote(apiURLInput) {
  let quoteText;
  let quoteAuthor;

  const response = await fetch(apiURLInput);
  const quoteData = await response.json();

  quoteText = quoteData[0].q;
  quoteAuthor = quoteData[0].a;

  return { quoteText, quoteAuthor };
}
