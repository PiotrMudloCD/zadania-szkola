import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import { colors } from "../colors";

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  color: ${(props) => props.color || colors.midnightBlue};
  background: ${(props) => props.bgColor || colors.sunFlower};
  border: 2px solid ${colors.nephritis};
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 250px;
  margin: 0 auto;

  :hover {
    background: white;
  }
`;

const IconWrapper = styled.div`
  padding-right: 10px;
`;

const Button = ({ label, bgColor, color, icon }) => {
  return (
    <ButtonWrapper bgColor={bgColor} color={color}>
      {icon && <IconWrapper><FontAwesomeIcon icon={icon === 'icon' ? faUser : ""} /></IconWrapper>}
      {label}
    </ButtonWrapper>
  );
};

export default Button;
