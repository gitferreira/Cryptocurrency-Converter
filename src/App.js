import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import image from "./cryptomonedas.png";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currencyData, setCurrencyData] = useState("");
  const [cryptoCurrencyData, setCryptoCurrencyData] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const convert = async () => {
      //Avoid first execution
      if (currencyData === "") return;

      //Consume API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrencyData}&tsyms=${currencyData}`;
      const result = await axios.get(url);

      //Spinner
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[cryptoCurrencyData][currencyData]);
      }, 2000);

      // console.log(result.data.DISPLAY[cryptoCurrencyData][currencyData]);
    };
    convert();
  }, [currencyData, cryptoCurrencyData]);

  //Show Spinner

  const component = loading ? <Spinner /> : <Result result={result} />;

  return (
    <Container>
      <div>
        <Image src={image} alt="crypto image" />
      </div>
      <div>
        <Heading>Cryptocurrency Converter</Heading>
        <Form
          setCurrencyData={setCurrencyData}
          setCryptoCurrencyData={setCryptoCurrencyData}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
