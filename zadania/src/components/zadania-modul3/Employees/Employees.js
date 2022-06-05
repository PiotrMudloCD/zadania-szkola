import React from "react";

import styled from "styled-components";
import EmployeesList from "./EmployeesList";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 34,
    salary: "4350$",
    position: "engineer",
  },
  {
    id: 2,
    name: "Krzysztof Jerzyna",
    age: 34,
    salary: "3503$",
    position: "javaScript developer",
  },
  {
    id: 3,
    name: "Adam Słodowy",
    age: 34,
    salary: "8704$",
    position: "dev-ops",
  },
  {
    id: 4,
    name: "Bohdan Łazuka",
    age: 34,
    salary: "2350$",
    position: "actor",
  },
  {
    id: 5,
    name: "Leo Messi",
    age: 34,
    salary: "3367$",
    position: "mechanic",
  },
];

const EmployeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Employees = () => {
  return (
    <>
      <EmployeesWrapper>
        {data.map((item) => (
          <EmployeesList
            name={item.name}
            age={item.age}
            salary={item.salary}
            position={item.position}
            key={item.id}
          />
        ))}
      </EmployeesWrapper>
    </>
  );
};

export default Employees;
