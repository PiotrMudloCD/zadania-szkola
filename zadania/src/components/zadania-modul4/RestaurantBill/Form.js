import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const FormContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const FormInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const FormSelect = styled.select`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 21rem;
  margin-top: 1rem;
`;

const Actions = styled.div`
  text-align: left;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  :hover {
    background-color: #510674;
    border-color: #510674;
  }
`;

const Form = () => {

   const [enteredPrice,setEnteredPrice] = useState(0);
   const [selectedTip, setSelectedTip] = useState(0);
   const [isSended, setIsSended] = useState(false);
   const tax = 23;

  const inputChangeHandler = (e) => {
    //setEnteredPrice(e.target.value);
    setEnteredPrice((v) => (e.target.validity.valid ? e.target.value : v))
  };

  const selectChangeHandler = (event) => {
    setSelectedTip(event.target.value);
  };

  const calculateBill = ( tip, price) => {
    const bill = (tip !== 0 || '') ? price * ((tip / 100) + 1) * ((tax / 100) + 1) : price * ((tax / 100) + 1);
    return bill;
  };


  const handleOnSubmit = (e) => {
      e.preventDefault();
      setIsSended(true);
  };

  return (
    <>
       <FormWrapper onSubmit={handleOnSubmit}>
       {!isSended &&<FormContent>
          <FormLabel>Kwota(netto)</FormLabel>
          <FormInput
            type="number"
            min="0.01"
            step="0.01"
            pattern="[0-9]*"
            onChange={inputChangeHandler}
          />
          <FormLabel>
            Napiwek
            <FormSelect onChange={selectChangeHandler}>
              <option value="0">0</option>
              <option value="8">8%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
            </FormSelect>
          </FormLabel>
          <Actions>
            <Button type="submit">Przelicz</Button>
          </Actions>
        </FormContent>}
        {isSended === true && <div>Do zpałaty: {calculateBill(selectedTip, enteredPrice).toFixed(2)}</div>}
      </FormWrapper>
    </>
  );
};

export default Form;
