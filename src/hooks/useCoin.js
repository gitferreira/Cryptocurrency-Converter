import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Selector = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, initialState, options) => {
  //Custom Hook State
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selector onChange={handleChange} value={state}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Selector>
    </Fragment>
  );

  //Return state, interface & fnc to modify state
  return [state, Select, setState];
};

export default useCoin;
