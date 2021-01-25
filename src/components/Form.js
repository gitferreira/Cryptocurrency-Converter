import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useCoin from "../hooks/useCoin";
import useCryptoCoin from "../hooks/useCryptoCoin";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({setCurrencyData, setCryptoCurrencyData}) => {
  //State crypto currencies

  const [listCrypto, setListCrypto] = useState([]);
  const [error, setError] = useState(false);

  const CURRENCIES = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "GBP", name: "British Pound" },
  ];

  //Use useCoin
  const [currency, SelectCurrency] = useCoin(
    "Choose your Currency",
    "",
    CURRENCIES
  );

  //Use Cryto
  const [cryptoCurrency, SelectCrypto] = useCryptoCoin(
    "Choose your Crypto Currency",
    "",
    listCrypto
  );

  //Execute call to API
  useEffect(() => {
    const consumeAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);

      setListCrypto(result.data.Data);
    };
    consumeAPI();
  }, []);

  //Submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (currency === "" || cryptoCurrency === "") {
      setError(true);
      return;
    } else {
      setError(false);
      setCurrencyData(currency)
      setCryptoCurrencyData(cryptoCurrency)


    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All fields are required" /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
