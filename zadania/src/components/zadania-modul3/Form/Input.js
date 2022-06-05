import React from "react";

import styled from 'styled-components';
import { colors } from "../colors";

const InputBox = styled.input`
  font-size: 18px;
  color: ${props => props.color || colors.midnightBlue};
  background-color: ${props => props.bgColor || colors.clouds};
  border: ${props => props.borderSize || '1px'} solid ${props => props.borderColor || colors.concrete};
  border-radius: ${props => props.borderRadius || '4px'};
  padding: 15px 20px;
  margin: 20px 0;
`;

const Input = ({bgColor, color, borderSize, borderRadius, borderColor}) => {
  return (
    <InputBox type='text' placeholder="Type something"/>
  )
}

export default Input;