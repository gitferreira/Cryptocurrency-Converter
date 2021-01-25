import React, { Fragment, useState } from "react";
import styled from "@emotion/styled"

const Label = styled.label`
font-family: "Bebas Neue", cursive;
color: #fff;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`

const Selector = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCryptoCoin = (label, initialState, options) => {

  // console.log(options)
  //Custom Hook State
  const [state, setState] = useState(initialState);
  //??



  const handleChange = e => {
      setState(e.target.value)
  }

  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selector
      onChange = {handleChange}
      value = {state}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Selector>
    </Fragment>
  );

  //Return state, interface & fnc to modify state
  return [state, SelectCrypto, setState];
};

export default useCryptoCoin;
