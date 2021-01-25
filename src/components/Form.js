import React from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCryptoCoin from "../hooks/useCryptoCoin";

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

const Form = () => {
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
      ""
  )

  return (
    <form>
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
