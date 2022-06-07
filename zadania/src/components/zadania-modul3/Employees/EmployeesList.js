import React, { useState } from "react";

import styled from "styled-components";
import { colors } from "../colors";

const EmployeesListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const  NameBox = styled.div`
  border: 2px solid ${colors.midnightBlue};
  padding: 10px;
  background: ${colors.clouds};
  width: 30%;
  cursor: ${props => props.visible ? '' : 'pointer'};
`;

const  Details = styled.div`
  border: 2px solid ${colors.midnightBlue};
  padding: 10px;
  background: ${colors.concrete};
  width: 60%;
  transition: 0.2s ease-out;
`;

const Para = styled.p`
  font-size: 18px;
  text-align: left;
  margin: 0;
`;

const EmployeesList = ({name, age, salary, position}) => {

  const [visible, setIsVisible] = useState(false);

  const handleShowDetails = () => setIsVisible(visible => !visible);

  return (
    <EmployeesListWrapper>
      <NameBox onClick={handleShowDetails}>
        <Para>{name}</Para>
      </NameBox>
      {visible && <Details>
        <Para>Age: {age}</Para>
        <Para> Salary: {salary}</Para>
        <Para>Position: {position}</Para>
      </Details>}
    </EmployeesListWrapper>
  )
};

export default EmployeesList;