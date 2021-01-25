import React from 'react';
import styled from "@emotion/styled";

const ResultDiv = styled.div`
color: #fff;
font-family: Arial, Helvetica, sans-serif;
`

const Paragraph = styled.p`
 font-size: 18px;

 span {
     font-weight: bold;
 }
`

const Price = styled.p`
    font-size: 30px;
    span {
     font-weight: bold;
 }
`


const Result = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return (
        <ResultDiv> 
        <Price>Price: <span>{result.PRICE}</span></Price>
        <Paragraph>Highest Price of the Day: <span>{result.HIGHDAY}</span></Paragraph>
        <Paragraph>Lowest Price of the Day: <span>{result.LOWDAY}</span></Paragraph>
        <Paragraph>24H Variation: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
        <Paragraph>Last Update: <span>{result.LASTUPDATE}</span></Paragraph>
        </ResultDiv>
      );
}
 
export default Result;