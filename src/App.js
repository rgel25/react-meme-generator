import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Meme Generator</title>
        <link
          rel="canonical"
          href="https://amiralles-react-meme-generator.netlify.app/"
        />
      </Helmet>
      <div className="container">
        <Navbar />
        <Form />
      </div>
    </>
  );
}
